import MockData from "../../../constant/MockData";
import {Button, Carousel, Col, Row, Tabs} from "antd";
import {useHistory, useParams} from 'react-router-dom';
import {AppstoreOutlined, CameraOutlined, CommentOutlined, EnvironmentOutlined, StarFilled} from "@ant-design/icons";
import TagGroup from "../../components/TagGroup";
import TopNavigation from "../../layouts/TopNavigation";
import Review from "./Review";

const carouselContainer = {
  borderRadius: '0 0 25px 25px',
  boxShadow: '0 4px 3px -3px rgba(0, 0, 0, 0.3)',
  overflow: 'hidden',
}

const carouselItemContainer = {
  height: '300px',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  width: '100%',
}

const PadContainer = {
  padding: '10px 20px',
}

const RoomTitleStyle = {
  fontSize: '18px',
  lineHeight: '18px',
  verticalAlign: 'middle',
  marginTop: '14px',
  marginBottom: '0',
}

const regionStyle = {
  lineHeight: '10px',
  fontSize: '10px',
  color: '#888888'
}


const RoomDetail = (props) => {
  let {roomId} = useParams();
  const history = useHistory();

  const goReserve = () => {
    history.push('/room/10/reserve')
  }

  return (
    <div style={{paddingBottom: '15px'}}>
      <TopNavigation title="방이름"/>
      <Carousel autoplay style={carouselContainer}>
        {
          props.mock | true ?
            MockData.BannerCarouselMockData.map(item => (
              <div key={item.roomId}>
                <div style={{...carouselItemContainer, backgroundImage: `url('${item.imageUrl}')`}}>
                  <span style={{color: 'white', fontSize: '20px'}}>{item.description}</span>
                </div>
              </div>
            ))
            :
            <>
            </>
        }
      </Carousel>

      <Row>
        <Col span={24} style={PadContainer}>
          <div style={{float: 'left'}}>
            <h3 style={RoomTitleStyle}>
              방 이름
              <span>
              <StarFilled style={{color: '#F2C94C', marginLeft: '10px', fontSize: '10px'}}/>
              <span style={{fontSize: '10px'}}>4.5</span>
              <span style={{fontSize: '10px', color: '#888888'}}> (1,324)</span>
          </span>
            </h3>
            <span style={regionStyle}>
          <EnvironmentOutlined/>
            서울
        </span>
          </div>
          <div style={{float: 'right', lineHeight: '56px', verticalAlign: 'center'}}>
            <p style={{margin: '0', fontSize: '22px', color: '#049FFF'}}>{"10,000"} 원 <span style={{color: '#888888'}}>/ 박</span>
            </p>
          </div>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<span><AppstoreOutlined style={{marginRight: '0'}}/> 상세 정보</span>} key="1">
          <Row>
            <Col span={24} style={PadContainer}>
              <h5>이지은님이 호스팅하는 펜션</h5>
              <TagGroup tags={['WIFI', '수영장', '온천', '테라스', '반려견 가능']}/>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>설명</h3>
              <p style={{color: '#8F92A1'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eius enim
                inventore iste magnam officiis! Deserunt dolore ea eveniet maxime quae, quam totam voluptates! Atque
                culpa
                molestias numquam quos repellat!</p>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>방 유형</h3>
              <p style={{color: '#8F92A1'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
                culpa
                ea earum ipsa omnis pariatur. Ab distinctio ducimus itaque iure molestiae, necessitatibus nihil, nisi
                repellendus sapiente sequi, temporibus unde.</p>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>주의 사항</h3>
              <p style={{color: '#8F92A1'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
                culpa
                ea earum ipsa omnis pariatur. Ab distinctio ducimus itaque iure molestiae, necessitatibus nihil, nisi
                repellendus sapiente sequi, temporibus unde.</p>
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span><CameraOutlined style={{marginRight: '5px'}}/>사진</span>} key="2">
          <Row style={{paddingBottom: '40px'}}>
            {MockData.BannerCarouselMockData.map((item, idx) => (
              <Col span={8} key={idx}>
                <div style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  height: '120px',
                }}/>
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span><CommentOutlined style={{marginRight: '5px'}}/>리뷰</span>} key="3">
          <Row>
            <Col span={24}>
              {MockData.ReviewDataMock.map((item) => (
                <Review key={item.reviewId} review={item}/>
              ))}
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>

      <Row>
        <Col style={PadContainer} span={24}>
          <Button onClick={() => goReserve()}
                  style={{
                    borderRadius: '50px',
                    height: '40px',
                    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.1)',
                    fontSize: '17px'
                  }}
                  type="primary" block>예약하기</Button>
        </Col>
      </Row>
    </div>
  );
}

export default RoomDetail;