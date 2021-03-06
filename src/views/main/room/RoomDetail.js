import MockData from "../../../constant/MockData";
import {Button, Carousel, Col, Row, Tabs} from "antd";
import {useHistory, useParams} from 'react-router-dom';
import {
  AppstoreOutlined,
  CameraOutlined,
  CommentOutlined,
  EnvironmentOutlined,
  HeartOutlined, HeartTwoTone,
  StarFilled
} from "@ant-design/icons";
import TagGroup from "../../components/TagGroup";
import TopNavigation from "../../layouts/TopNavigation";
import Review from "./Review";
import {useEffect, useState} from "react";
import {getRoomDetail, likeRoom} from "../../../api/room";
import RoomConf from "./RoomConf";
import {getReviews} from "../../../api/review";

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
  const [room, setRoom] = useState(MockData.InitRoom);
  const [reviews, setReviews] = useState([]);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    getRoomDetail(roomId).then((result) => {
      let room = result.data;
      setRoom(room);
    });

    getReviews(null, roomId).then((res) => {
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
    })
  }, []);

  const goReserve = () => {
    history.push(`/room/${room.roomId}/reserve`)
  }

  return (
    <div style={{paddingBottom: '15px'}}>
      <TopNavigation title="?????????"/>

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

      <div style={{textAlign: 'right'}}>
        <Button style={{
          backgroundColor: isLike ? '#eb2f96' : '#eeeeee',
          width: "48px",
          height: "48px",
          marginRight: "30px",
          marginTop: '-20px',
        }} icon={isLike ? <HeartTwoTone style={{fontSize: "30px"}} twoToneColor="#eb2f96" />
            :
            <HeartOutlined style={{fontSize: "30px", color: "#aaaaaa"}} />
        } shape="circle" onClick={() => {
          likeRoom(roomId).then((res) => {
            setIsLike(res.data.currentStatus)
          })
        }} />
      </div>

      <Row>
        <Col span={24} style={PadContainer}>
          <div style={{float: 'left'}}>
            <h3 style={RoomTitleStyle}>
              {room.title}
              <span>
              <StarFilled style={{color: '#F2C94C', marginLeft: '10px', fontSize: '10px'}}/>
              <span style={{fontSize: '10px'}}>{room.avgScore?.toFixed(2)}</span>
              <span style={{fontSize: '10px', color: '#888888'}}> ({room.reviewCount})</span>
          </span>
            </h3>
            <span style={regionStyle}>
          <EnvironmentOutlined/>
              {room.location}
        </span>
          </div>
          <div style={{float: 'right', lineHeight: '56px', verticalAlign: 'center'}}>
            <p style={{margin: '0', fontSize: '22px', color: '#049FFF'}}>{room.price.toLocaleString()} ??? <span style={{color: '#888888'}}>/ ???</span>
            </p>
          </div>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<span><AppstoreOutlined style={{marginRight: '0'}}/> ?????? ??????</span>} key="1">
          <Row>
            <Col span={24} style={PadContainer}>
              <h5>{room.username}?????? ??????????????? ??????</h5>
              <TagGroup tags={room.room_amenity.map(item => item.facility)}/>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>??????</h3>
              <p style={{color: '#8F92A1'}}>{room.content}</p>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>??? ??????</h3>
              <p style={{color: '#8F92A1'}}>
                {
                  room.room_configuration.map((conf, idx) => (
                    <RoomConf key={idx} confType={conf.confType} count={conf.count} />
                  ))
                }
              </p>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={PadContainer}>
              <h3 style={{marginBottom: '4px'}}>?????? ??????</h3>
              <p style={{color: '#8F92A1'}}>{room.rule}</p>
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span><CameraOutlined style={{marginRight: '5px'}}/>??????</span>} key="2">
          <Row style={{paddingBottom: '40px'}}>
            {room.images.map((item, idx) => (
              <Col span={8} key={idx}>
                <div style={{
                  backgroundImage: `url('${item.url}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  height: '120px',
                }}/>
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span><CommentOutlined style={{marginRight: '5px'}}/>??????</span>} key="3">
          <Row>
            <Col span={24}>
              {reviews  .map((item) => (
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
                  type="primary" block>????????????</Button>
        </Col>
      </Row>
    </div>
  );
}

export default RoomDetail;