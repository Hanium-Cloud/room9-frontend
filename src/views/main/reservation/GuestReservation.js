import TopNavigation from "../../layouts/TopNavigation";
import {Button, Col, Row} from "antd";
import Color from "../../../constant/Color";
import {CheckCircleOutlined, EditOutlined, SearchOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {myBook} from "../../../api/reservation";
import {useHistory} from "react-router-dom";

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
  const history = useHistory();
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
              myBooks.map((book, idx) => (
                <div style={{marginBottom: '10px'}}>
                  <Row key={idx} style={{padding: '8px 12px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #eeeeee'}} onClick={() => {
                    history.push(`/room/${book.roomId}`);
                  }}>
                    <Col span={16}>
                      <h3 style={roomName}>{book.title} <CheckCircleOutlined style={confirmIcon}/></h3>
                      <p style={reserveText}>성인{book.personnel}, {book.startDate} ~ {book.finalDate}</p>
                      <p style={reserveText}>{book.detailLocation}</p>
                    </Col>
                    <Col span={8} style={{textAlign: 'right', paddingTop: '8px'}}>
                      <p style={payText}>결제금액</p>
                      <p style={payValue}>50,000 원</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} style={{textAlign: 'right', marginTop: '-10px'}}>
                      <Button
                        onClick={() => {history.push(`/room/${book.roomId}/review`)}}
                        style={{marginRight: '20px', width: '40px', height: '40px'}}
                        type="primary" shape="circle" icon={<EditOutlined />} />
                    </Col>
                  </Row>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default GuestReservation;