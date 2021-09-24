import {Col, Input, Row,} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import React, {useState, useEffect} from "react";
import PageHeader from "../../components/PageHeader";
import AppHeader from "../../layouts/AppHeader";
import BottomNavigation from "../../layouts/BottomNavigation";
import RoomCard from "../../main/room/RoomCard"
import MockData from "../../../constant/MockData";

const SearchResult = (props) => {
    const [searchRooms, setSearchRooms] = useState([]);

    useEffect(() => {
        setSearchRooms(MockData.RoomCardMock);
    }, []);

    return (
      <div style={{paddingBottom: '70px'}}>
        <AppHeader />
        <Row>
            <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
                <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="마음에 드는 숙소를 찾아보세요!" />
            </Col>
        </Row>
        <PageHeader title="검색 결과" />
        <div>
            {
              searchRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))
            }
          </div>
        <BottomNavigation />
      </div>
    );
};
  
export default SearchResult;
