import {Col, Row, Radio, InputNumber, Button, message} from "antd";
import styled from "styled-components";
import MockData from "../../../constant/MockData";
import {EnvironmentOutlined, StarFilled} from "@ant-design/icons";
import MobileDatePicker, {dateToCalendarSpec} from "../../components/MobileDatePicker";
import Color from "../../../constant/Color";
import TopNavigation from "../../layouts/TopNavigation";
import {useEffect, useState} from "react";
import {getRoomDetail, getRoomPrice} from "../../../api/room";
import {useHistory, useParams} from "react-router-dom";
import {userState} from "../../../store/state";
import {useRecoilValue} from 'recoil';
import {bookRoom} from "../../../api/reservation";

const PadContainer = {
    padding: '10px 20px',
}

const StrongPadContainer = {
    padding: '10px 30px',
}

const BannerImage = styled.div`
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;
  height: 200px;
`

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

function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 :new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 :new Date(_date2);

    diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));

    return diff;
}

function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; }

function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
}

function selectedDayToDate(selectedDayRange) {
    let startDate = new Date();
    let finalDate = new Date();
    if (selectedDayRange.from != null && selectedDayRange.to != null) {
        startDate = new Date(`${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`);
        finalDate = new Date(`${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`);
    }

    return [startDate, finalDate];
}

const RoomReserve = (props) => {
    let {roomId} = useParams();
    const history = useHistory();
    const user = useRecoilValue(userState);
    const [room, setRoom] = useState(MockData.InitRoom);
    const [personnel, setPersonnel] = useState(1);
    const [resultPrice, setResultPrice] = useState(0);
    const [petWhether, setPetWhether] = useState(false);

    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const defaultFrom = dateToCalendarSpec(now);
    const defaultTo = dateToCalendarSpec(tomorrow);
    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultRange
    );

    const getPrice = () => {
        if (selectedDayRange.from == null || selectedDayRange.to == null || !personnel) {
            return;
        }

        let [startDate, finalDate] = selectedDayToDate(selectedDayRange);
        startDate = toStringByFormatting(startDate);
        finalDate = toStringByFormatting(finalDate);

        getRoomPrice(roomId, personnel, startDate, finalDate).then(res => {
            setResultPrice(res.data.totalPrice);
        });
    }
    useEffect(() => {
        getPrice();
        getRoomDetail(roomId).then((res) => {
            console.log(res.data);
            setRoom(res.data);
        });
    }, []);

    useEffect(() => {
        getPrice();
    }, [selectedDayRange, personnel]);


    const goPay = () => {
        IMP.request_pay({
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: room.title + " 예약하기",
            amount: resultPrice,
            buyer_email: user.email,
            buyer_name: user.name,
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456'
        }, function (rsp) {
            if (rsp.success) {
                let [startDate, finalDate] = selectedDayToDate(selectedDayRange);
                startDate = toStringByFormatting(startDate);
                finalDate = toStringByFormatting(finalDate);

                bookRoom(
                    roomId,
                    startDate,
                    finalDate,
                    personnel,
                    petWhether,
                    JSON.stringify(rsp),
                ).then((res) => {
                    message.success(`${room.title} 예약에 성공했습니다!`);
                    history.push('/mypage/reservation')
                });
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
                alert(msg);
            }
        });
    };

    const panelRender = (panelNode) => (
        <StyleWrapperDatePicker>
            {panelNode}
        </StyleWrapperDatePicker>
    );

    return (
        <>
            <TopNavigation title="예약하기"/>
            <Row>
                <Col span={24}>
                    <BannerImage src={room.images[0].url}/>
                </Col>
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
                        <p style={{
                            margin: '0',
                            fontSize: '22px',
                            color: '#049FFF'
                        }}>{room.price.toLocaleString()} 원 <span style={{color: '#888888'}}>/ 박</span>
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24} style={PadContainer}>
                    <h3 style={{marginBottom: '4px'}}>주의 사항</h3>
                    <p style={{color: '#8F92A1'}}>{room.rule}</p>
                </Col>
            </Row>

            <Row>
                <Col style={PadContainer} span={24}>
                    <h3 style={{textAlign: 'center'}}>예약하기</h3>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{...PadContainer, ...{textAlign: 'center'}}}>
                    <MobileDatePicker selectedDayRange={selectedDayRange} onChange={setSelectedDayRange}/>
                </Col>
            </Row>
            <Row style={PadContainer}/>
            <Row style={StrongPadContainer}>
                <Col span={12}>
                    <h4>인원 <span style={{color: '#888888'}}> (유아미포함)</span></h4>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <InputNumber style={{textAlign: 'right'}} onChange={setPersonnel} value={personnel}/>
                </Col>
            </Row>
            <Row style={StrongPadContainer}>
                <Col span={12}>
                    <h4>반려견</h4>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Radio.Group onChange={setPetWhether} defaultValue={false}>
                        <Radio.Button value={true}>있음</Radio.Button>
                        <Radio.Button value={false}>없음</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>

            <Row style={StrongPadContainer}>
                <Col span={24}>
                    <h3>상세요금</h3>
                </Col>
                {/*----------*/}
                <Col span={12}>
                    <p>{room.price.toLocaleString()} X {dateDiff(... selectedDayToDate(selectedDayRange))}박</p>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <p>{resultPrice.toLocaleString()} 원</p>
                </Col>
                {/*----------*/}
                <Col span={12}>
                    <p style={{color: '#999999'}}>추가 요금</p>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <p style={{color: '#999999'}}>0 원</p>
                </Col>
                <Col span={24}>
                    <hr style={{borderTop: '1px dashed #eeeeee'}}/>
                </Col>
                <Col span={24} style={{marginTop: '10px', textAlign: 'right'}}>
                    <p style={{color: Color.Primary}}>{resultPrice.toLocaleString()} 원</p>
                </Col>
            </Row>

            <Row style={PadContainer}>
                <Col span={24} style={{paddingBottom: '30px'}}>
                    <Button onClick={() => goPay()} type="primary" block
                            style={{height: '50px', fontSize: '18px'}}
                    >{resultPrice.toLocaleString()}원 결제하기</Button>
                </Col>
            </Row>
        </>
    );
}

export default RoomReserve;