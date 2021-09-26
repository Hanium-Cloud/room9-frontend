import {Col, Input, Row, Slider, InputNumber, Button, Menu, Dropdown} from "antd";
import {SearchOutlined, DownOutlined} from "@ant-design/icons";
import Color from "../../../constant/Color";
import React, {useState, useEffect} from "react";
import PageHeader from "../../components/PageHeader";
import BottomNavigation from "../../layouts/BottomNavigation";
import RoomCard from "../../main/room/RoomCard"
import MockData from "../../../constant/MockData";
import styled from 'styled-components';
import {getSearchResult} from "../../../api/search";
import TopNavigation from "../../layouts/TopNavigation";
import { useRecoilState } from "recoil";
import { filterState } from "../../../store/state";

const SearchBoxBlock = styled.div `
    margin-bottom: 10px;
    overflow: 'hidden';
    display: grid;
    grid-template:
        "InnerInputBox" 50%
        "InnerBox" 50%
        "Button"
        /1fr;
`;

const InnerInputBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerOtherBox = styled.div `
    display: grid;
    grid-template:
        "SliderBox InputBox DropdownBox"
        /1fr 1fr 0.75fr;
`;

const InputBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 15px 0px 15px;
    width: 100%;
`;

const SliderBox = styled.div `
    display: grid;
    grid-template:
        "p" 25%
        "Slider" 75%
        /1fr;
    width: 100%;
`;

const DropDownBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchResult = (props) => {
    const [filter, setFilter] = useRecoilState(filterState);
    const [searchRooms, setSearchRooms] = useState([]);
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
                'id': room.roomId,
                'thumbnailUrl': room?.images[0]?.url,
                'name': room.title,
                'region': room.location,
                'price': room.price,
                'score': 3.58,
                'reviewCount': room.like,
              }));
      
            setSearchRooms(results);
          });
    };

    const onDropdownClick = e => {
        const sorting = e.target.textContent === '최신순' ? 'CREATEDDESC' : 'LIKEDDESC';
        setFilter({...filter,
            orderStandard: sorting
        });
    };

    useEffect(() => {
        getSearchResult(filter).then((response) => {
            setSearchRooms([]);
      
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
      
            setSearchRooms(results);
          });
    }, []);

    const menu = (
        <Menu>
          <Menu.Item>
            <div onClick={onDropdownClick}>
              최신순
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={onDropdownClick}>
              좋아요순
            </div>
          </Menu.Item>
        </Menu>
    );

    return (
      <div style={{paddingBottom: '70px'}}>
        <TopNavigation title="방 검색" />
        <Row>
            <Col span={24} style={{padding: '0px 15px 10px 15px'} }>
                <Input size="medium" style={{borderRadius: '25px', borderColor: Color.Primary}} prefix={<SearchOutlined style={{color: '#888888'}}/>} placeholder="필터로 검색하기" onClick={onInputClick} readOnly/>
            </Col>
        </Row>
        {visible ? (
            <SearchBoxBlock>
                <InnerInputBox>
                    <InputBox>
                        <Input style={{width: '120%', borderColor: Color.Primary, borderRadius: '25px'}} placeholder="방 이름으로 검색" onChange={onTitleInputChange} value={filter.title}/>
                    </InputBox>
                    <InputBox>
                        <Input style={{width: '160%', borderColor: Color.Primary, borderRadius: '25px'}} placeholder="지역 이름으로 검색" onChange={onLocationInputChange} value={filter.detailLocation}/>
                    </InputBox>
                </InnerInputBox>
                <InnerOtherBox>
                    <SliderBox>
                        <div style={{marginLeft: '35%', color: "gray"}}>가격 설정</div>
                        <Slider style={{width: '75%', borderColor: Color.Primary, marginLeft: '10%'}} min={10000} max={100000} step={5000} onChange={onSliderChange} value={filter.limitPrice}/>
                    </SliderBox>
                    <InputBox>
                        <InputNumber style={{width: "100%", borderColor: Color.Primary, borderRadius: '25px'}} placeholder="예약 인원 수 선택" min={1} max={10} onChange={onInputNumberChange} value={filter.limitPeople}/>
                    </InputBox>
                    <DropDownBox>
                        <Dropdown overlay={menu} style={{width: '20%'}}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: Color.Primary}}>
                                {filter.orderStandard === 'CREATEDDESC' ? '최신순' : '좋아요순'} <DownOutlined />
                            </a>
                        </Dropdown>
                    </DropDownBox>
                </InnerOtherBox>
                <Button size="medium" icon="검색" style={{width: "95%", borderColor: Color.Primary, color: Color.Primary, margin: '10px 0px 0px 15px', borderRadius: '25px'}} onClick={onButtonClick}/>
            </SearchBoxBlock>
        ) : null}
        {searchRooms === null ? 
            <PageHeader title="검색 결과가 없습니다."/> : (
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
        )}
        <BottomNavigation />
      </div>
    );
};
  
export default SearchResult;
