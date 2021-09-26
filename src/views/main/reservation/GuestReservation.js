import TopNavigation from "../../layouts/TopNavigation";
import {Col, Row} from "antd";
import Color from "../../../constant/Color";
import {CheckCircleOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {myBook} from "../../../api/reservation";

const roomName = {
  fontSize: '20px',
  marginBottom: '2px',
};

const reserveText = {
  fontSize: '12px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  paddingBottom: 0,
  margin: '0',
};

const confirmIcon = {
  fontSize: '14px',
  color: 'green'
}

const payText = {
  fontSize: '12px',
  marginBottom: 0,
  color: '#aaaaaa',
  fontWeight: 'bold',
};

const payValue = {
  fontSize: '18px',
  color: Color.Primary,
  margin: '0',
};




const GuestReservation = (props) => {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    myBook().then(res => {
      setMyBooks(res.data.booked);
    })
  }, []);

  return (
    <>
      <TopNavigation title="예약내역" returnUrl="/mypage"/>
      <div>
        <div>
          <div style={{padding: '5px 12px'}}>
            {
              myBooks.map(book => (
                  <Row style={{padding: '8px 12px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #eeeeee'}}>
                    <Col span={16}>
                      <h3 style={roomName}>{book.title} <CheckCircleOutlined style={confirmIcon}/></h3>
                      <p style={reserveText}>성인{book.personnel}, {book.startDate} ~ {book.finalDate}</p>
                    </Col>
                    <Col span={8} style={{textAlign: 'right', paddingTop: '8px'}}>
                      <p style={payText}>결제금액</p>
                      <p style={payValue}>50,000 원</p>
                    </Col>
                  </Row>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default GuestReservation;