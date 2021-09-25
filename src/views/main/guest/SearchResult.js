import {Col, Input, Row, Slider, InputNumber, Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import React, {useState, useEffect} from "react";
import PageHeader from "../../components/PageHeader";
import AppHeader from "../../layouts/AppHeader";
import BottomNavigation from "../../layouts/BottomNavigation";
import RoomCard from "../../main/room/RoomCard"
import MockData from "../../../constant/MockData";
import styled from 'styled-components';
import {getSearchResult} from "../../../api/search";
import {getAllRooms} from "../../../api/room";

const SearchBoxBlock = styled.div `
    padding: '10px 20px';
    overflow: 'hidden';
    display: grid;
    grid-template:
        "InputBlock InputBlock" 50%
        "Slider InputNumber" 50%
        "Button Button"
        /1fr 1fr;
`;

const InputBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SliderBox = styled.div `
    display: grid;
    grid-template:
        "p" 25%
        "Slider" 75%
        /1fr;
`;

const SearchResult = (props) => {
    const [searchRooms, setSearchRooms] = useState([]);
    const [filter, setFilter] = useState({
        title: '',
        limitPrice: 0,
        detailLocation: '',
        limitPeople: 0,
        orderStandard: null
    });
    const [visible, setVisible] = useState(true);

    const onInputClick = e => {
        setVisible(!visible);
    };

    const onTitleInputChange = e => {
        setFilter({...filter,
            title: e.target.value
        });
    };

    const onLocationInputChange = e => {
        setFilter({...filter,
            detailLocation: e.target.value
        });
    };

    const onSliderChange = value => {
        setFilter({...filter,
            limitPrice: value
        });
    };

    const onInputNumberChange = value => {
        setFilter({...filter,
            limitPeople: value
        });
    };

    const onButtonClick = e => {
        setVisible(false);
        console.log(filter);
        getSearchResult(filter).then((response) => {
            setSearchRooms([]);
      
            const rooms = response.data.room;
            const results = rooms.map(room => ({
              'roomId' : room.roomId,
              'imageUrl' : room?.images[0]?.url,
              'description' : room.title
            }));
      
            setSearchRooms(results);
          });
        setFilter({...filter,
            title: '',
            limitPrice: 0,
            detailLocation: '',
            limitPeople: 0,
            orderStandard: null
        });
    };

    useEffect(() => {
        getAllRooms().then((response) => {
            setSearchRooms([]);
      
            const rooms = response.data.room;
            const results = rooms.map(room => ({
              'roomId' : room.roomId,
              'imageUrl' : room?.images[0]?.url,
              'description' : room.title
            }));
      
            setSearchRooms(results);
          });
    }, []);

    return (
      <div style={{paddingBottom: '70px'}}>
        <AppHeader />
        <Row>
            <Col span={24} style={{padding: '15px', backgroundColor: Color.Primary} }>
                <Input size="large" style={{borderRadius: '25px'}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="마음에 드는 숙소를 찾아보세요!" onClick={onInputClick} readOnly/>
            </Col>
        </Row>
        {visible ? (
            <SearchBoxBlock>
                <InputBox>
                    <Input style={{width: '75%', borderColor: Color.Primary, borderRadius: '25px'}} placeholder="방 이름으로 검색" onChange={onTitleInputChange}/>
                </InputBox>
                <InputBox>
                    <Input style={{width: '75%', borderColor: Color.Primary, borderRadius: '25px'}} placeholder="지역 이름으로 검색" onChange={onLocationInputChange}/>
                </InputBox>
                <SliderBox>
                    <div style={{marginLeft: '35%', color: "gray"}}>가격 설정</div>
                    <Slider style={{width: '75%', borderColor: Color.Primary, marginLeft: '10%'}} min={1} max={30} onChange={onSliderChange}/>
                </SliderBox>
                <InputBox>
                    <InputNumber style={{width: "75%", borderColor: Color.Primary, borderRadius: '25px'}} placeholder="예약 인원 수 선택" min={1} max={10} onChange={onInputNumberChange}/>
                </InputBox>
                <Button size="medium" icon="검색" style={{width: "200%", border: "none", backgroundColor: Color.Primary, color: "white"}} onClick={onButtonClick}/>
            </SearchBoxBlock>
        ) : null}
        {searchRooms === null ? (
            <>
                <PageHeader title="검색 결과"/>
                <div>
                {
                searchRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))
                }
                </div>
            </>   
        ) : <PageHeader title="검색 결과가 없습니다."/>}
        <BottomNavigation />
      </div>
    );
};
  
export default SearchResult;
