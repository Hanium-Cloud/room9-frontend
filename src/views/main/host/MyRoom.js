import BottomNavigation from "../../layouts/BottomNavigation";
import {Button, Col, Row} from "antd";
import TopNavigation from "../../layouts/TopNavigation";
import AppHeader from "../../layouts/AppHeader";
import Color from "../../../constant/Color";
import MockData from "../../../constant/MockData";
import RoomCard from "../room/RoomCard";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const ButtonContainer = styled.div`
  padding: 20px 40px;
`;

const MyRoom = (props) => {
  const history = useHistory();

  return (
    <div>
      <AppHeader />
      <Row>
        <Col span={24} style={{padding: '15px'}}>
          <ButtonContainer>
            <Button onClick={() => {history.push("/host/myroom/create")}} block style={{backgroundColor: Color.Primary, color: Color.White}}>새로운 방 등록하기!</Button>
          </ButtonContainer>
          <div>
            {
              MockData.RoomCardMock.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))
            }
          </div>
        </Col>
      </Row>
      <BottomNavigation />
    </div>
  )
};

export default MyRoom;