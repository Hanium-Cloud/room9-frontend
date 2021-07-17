import {Col, Row, Radio, InputNumber, Button} from "antd";
import styled from "styled-components";
import MockData from "../../../constant/MockData";
import {EnvironmentOutlined, StarFilled} from "@ant-design/icons";
import MobileDatePicker from "../../components/MobileDatePicker";
import Color from "../../../constant/Color";

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


const RoomReserve = (props) => {
  const goPay = () => {
    IMP.request_pay({
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: 14000,
      buyer_email: 'iamport@siot.do',
      buyer_name: '구매자이름',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456'
    }, function (rsp) {
      if (rsp.success) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
    });
  };

  const panelRender = (panelNode) => (
    <StyleWrapperDatePicker>
      {panelNode}
    </StyleWrapperDatePicker>
  );

  return (
    <>
      <Row>
        <Col span={24}>
          <BannerImage src={MockData.BannerCarouselMockData[0].imageUrl}/>
        </Col>
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
            <p style={{margin: '0', fontSize: '22px', color: '#049FFF'}}>{"30,000"} 원 <span style={{color: '#888888'}}>/ 박</span>
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col style={PadContainer} span={24}>
          <h3 style={{textAlign: 'center'}}>예약하기</h3>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{...PadContainer, ...{textAlign: 'center'}}}>
          <MobileDatePicker/>
        </Col>
      </Row>
      <Row style={PadContainer}/>
      <Row style={StrongPadContainer}>
        <Col span={12}>
          <h4>인원 <span style={{color: '#888888'}}> (유아미포함)</span></h4>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
          <InputNumber style={{textAlign: 'right'}} value={1}/>
        </Col>
      </Row>
      <Row style={StrongPadContainer}>
        <Col span={12}>
          <h4>반려견</h4>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
          <Radio.Group onChange={() => {
          }} defaultValue="b">
            <Radio.Button value="a">있음</Radio.Button>
            <Radio.Button value="b">없음</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <Row style={StrongPadContainer}>
        <Col span={24}>
          <h3>상세요금</h3>
        </Col>
        {/*----------*/}
        <Col span={12}>
          <p>30,000 X 3박</p>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
          <p>90,000 원</p>
        </Col>
        {/*----------*/}
        <Col span={12}>
          <p style={{color: '#999999'}}>서비스 요금</p>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
          <p style={{color: '#999999'}}>5,000 원</p>
        </Col>
        <Col span={24}>
          <hr style={{borderTop: '1px dashed #eeeeee'}}/>
        </Col>
        <Col span={24} style={{marginTop: '10px', textAlign: 'right'}}>
          <p style={{color: Color.Primary}}>95,000 원</p>
        </Col>
      </Row>

      <Row style={PadContainer}>
        <Col span={24} style={{paddingBottom: '30px'}}>
          <Button onClick={() => goPay()} type="primary" block
                  style={{height: '50px', fontSize: '18px'}}
          >95,000원 결제하기</Button>
        </Col>
      </Row>
    </>
  );
}

export default RoomReserve;