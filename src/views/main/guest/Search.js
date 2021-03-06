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
import {useHistory} from "react-router-dom";
import {getRecentReviews, getReviews} from "../../../api/review";

const mainTextContainer = {
  marginTop: '10px',
  textAlign: 'center',
}

const Search = (props) => {
  const user = useRecoilValue(userState);
  const [popularRooms, setPopularRooms] = useState([]);
  const [randomRooms, setRandomRooms] = useState([]);
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

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
        'score': room.avgScore,
        'reviewCount': room.reviewCount,
        'like': room.like,
      }));
      setPopularRooms(results);
    });

    getRecentReviews().then((res) => {
      const reviews = res.data.data;


      setReviews(
        reviews.map((review) => ({
          score: review.reviewScore,
          title: review.reviewContent,
          content: review.reviewContent,
          createdBy: {
            name: review.nickname,
            avatarUrl: review.thumbnailImgUrl,
          }
        }))
      )
    });
  }, [])

  const onClick = e => {
    history.push("/search");
  };

  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <Row>
        <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
          <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="????????? ?????? ????????? ???????????????!" onClick={onClick} readOnly/>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{backgroundColor: Color.White}}>

          {/*????????? => ?????? ???????????? ????????????*/}
          <BannerCarousel mock={false} items={randomRooms} />

          {/*????????? ?????? => ?????? ?????? ????????????*/}
          <BannerText
            title="??????????????? ?????? ???????????? ??????!"
            content="????????? ???????????? ???????????? ????????? ?????? ????????? ???????????????"
          />
          <div style={{marginTop: '15px',}}>
            {
              reviews.map((item) => (
                <Review key={item.reviewId} review={item} card={true} />
              ))
            }
          </div>

          {/*?????? ?????? => ?????? ???????????? ?????? ????????????*/}
          <BannerText
            title="?????? ???????????? ??????!"
            content="???????????? ????????? ???????????? ????????? ????????????"
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