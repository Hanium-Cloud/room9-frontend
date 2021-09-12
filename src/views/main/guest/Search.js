import {Col, Input, Row,} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import BannerCarousel from "../../components/BannerCarousel";
import MockData, {houseImage1} from "../../../constant/MockData";
import Review from "../room/Review";
import BannerText from "../../components/BannerText";
import RoomCard from "../room/RoomCard";
import AppHeader from "../../layouts/AppHeader";
import BottomNavigation from "../../layouts/BottomNavigation";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/state";
import {getPopularRooms, getRandomRooms} from "../../../api/room";
import {useEffect, useState} from "react";

const mainTextContainer = {
  marginTop: '10px',
  textAlign: 'center',
}

const Search = (props) => {
  const user = useRecoilValue(userState);
  const [popularRooms, setPopularRooms] = useState([]);
  const [randomRooms, setRandomRooms] = useState([]);

  useEffect(() => {
    getRandomRooms().then((response) => {
      setRandomRooms([]);

      const rooms = response.data.room;
      const results = rooms.map(room => ({
        'roomId' : room.roomId,
        'imageUrl' : room?.images[0]?.url,
        'description' : room.title
      }));

      setRandomRooms(results);
    })

    getPopularRooms().then((response) => {
      setPopularRooms([]);
      const rooms = response.data.room;
      const results = rooms.map(room => ({
        'id': room.roomId,
        'thumbnailUrl': room?.images[0]?.url,
        'name': room.title,
        'region': room.location,
        'price': room.price,
        'score': 3.58,
        'reviewCount': room.like,
      }));
      setPopularRooms(results);
    })
  }, [])

  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <Row>
        <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
          <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="마음에 드는 숙소를 찾아보세요!"/>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{backgroundColor: Color.White}}>

          {/*캐러셀 => 숙소 랜덤으로 뿌려주기*/}
          <BannerCarousel mock={false} items={randomRooms} />

          {/*이미지 카드 => 최근 리뷰 보여주기*/}
          <BannerText
            title="사용자들이 직접 작성하는 리뷰!"
            content="실시간 리뷰들을 확인하고 마음에 드는 숙소를 찾아보세요"
          />
          <div style={{marginTop: '15px',}}>
            {
              MockData.ReviewDataMock.map((item) => (
                <Review key={item.reviewId} review={item} card={true} />
              ))
            }
          </div>

          {/*숙소 카드 => 현재 인기있는 숙소 보여주기*/}
          <BannerText
            title="요즘 인기있는 숙소!"
            content="인기있는 숙소를 둘러보고 예약을 해보세요"
          />
          <div style={{marginTop: '15px'}}>
            {
              popularRooms.map((item) => (
                <RoomCard key={item.id} room={item} />
              ))
            }
          </div>
        </Col>
      </Row>
      <BottomNavigation />
    </div>
  );
}

export default Search;