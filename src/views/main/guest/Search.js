import {Carousel, Col, Input, Row,} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import BannerCarousel from "../../components/BannerCarousel";
import MockData from "../../../constant/MockData";
import Review from "../room/Review";
import BannerText from "../../components/BannerText";
import RoomCard from "../room/RoomCard";
import AppHeader from "../../layouts/AppHeader";

const mainTextContainer = {
  marginTop: '10px',
  textAlign: 'center',
}


const Search = (props) => {
  return (
    <>
      <AppHeader />
      <Row>
        <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
          <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="마음에 드는 숙소를 찾아보세요!"/>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{backgroundColor: Color.White}}>

          {/*캐러셀 => 숙소 랜덤으로 뿌려주기*/}
          <BannerCarousel mock={true} />

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
              MockData.RoomCardMock.map((item) => (
                <RoomCard key={item.id} room={item} />
              ))
            }
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Search;