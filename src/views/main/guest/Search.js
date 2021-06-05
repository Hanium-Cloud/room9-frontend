import {Carousel, Col, Input, Row,} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import BannerCarousel from "../../components/BannerCarousel";
import MockData from "../../../constant/MockData";
import Review from "../room/Review";
import BannerText from "../../components/BannerText";

const mainTextContainer = {
  marginTop: '10px',
  textAlign: 'center',
}


const Search = (props) => {
  return (
    <>
      <Row>
        <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
          <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined />} placeholder="hello, world"/>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{height: '1000px', backgroundColor: Color.White}}>

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
                <Review review={item} />
              ))
            }
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Search;