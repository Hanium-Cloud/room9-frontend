import AppHeader from "../../layouts/AppHeader";
import TopNavigation from "../../layouts/TopNavigation";
import TextArea from "antd/es/input/TextArea";
import {Button, Carousel, Col, InputNumber, message, Row} from "antd";
import {useEffect, useState} from "react";
import {getRoomDetail} from "../../../api/room";
import {useHistory, useParams} from "react-router-dom";
import MockData from "../../../constant/MockData";
import {EnvironmentOutlined, StarFilled} from "@ant-design/icons";
import {createReview} from "../../../api/review";

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

const RoomReview = (props) => {
  let {roomId} = useParams();
  const history = useHistory();
  const [room, setRoom] = useState(MockData.InitRoom);

  const [score, setScore] = useState(1);
  const [content, setContent] = useState('');

  useEffect(() => {
    getRoomDetail(roomId).then((result) => {
      let room = result.data;
      setRoom(room);
    });
  }, []);

  const writeReview = () => {
      createReview(
        roomId, content, score
      )
        .then((res) => {
          message.success(`${room.title} 리뷰작성 완료했습니다!`);
          history.push(`/room/${roomId}`);
        });
  };

  return (
    <div>
      <AppHeader />
      <TopNavigation title="리뷰 쓰기" />

      <Carousel autoplay style={carouselContainer}>
        {
          props.mock | true ?
            room.images.map((item, idx) => (
              <div key={idx}>
                <div style={{...carouselItemContainer, backgroundImage: `url('${item.url}')`}}>
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
              {room.title}
              <span>
              <StarFilled style={{color: '#F2C94C', marginLeft: '10px', fontSize: '10px'}}/>
              <span style={{fontSize: '10px'}}>{room.avgScore}</span>
              <span style={{fontSize: '10px', color: '#888888'}}> ({room.reviewCount})</span>
          </span>
            </h3>
            <span style={regionStyle}>
          <EnvironmentOutlined/>
              {room.location}
        </span>
          </div>
          <div style={{float: 'right', lineHeight: '56px', verticalAlign: 'center'}}>
            <p style={{margin: '0', fontSize: '22px', color: '#049FFF'}}>{room.price.toLocaleString()} 원 <span style={{color: '#888888'}}>/ 박</span>
            </p>
          </div>
        </Col>
      </Row>


      <div>
        <Row style={{padding: '10px 10px'}}>
          <Col span={24}>
            <InputNumber
              onChange={(value) => setScore(value)}
              style={{width: '100%'}} placeholder="점수 (1-5)" min={1} max={5} />
          </Col>

          <Col span={24} style={{marginTop: '10px'}}>
            <TextArea rows={4} placeholder="리뷰" value={content} onChange={(e) => setContent(e.target.value)} />
          </Col>

          <Col span={24} style={{marginTop: '10px'}}>
            <Button block onClick={() => writeReview()}>등록하기</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RoomReview;