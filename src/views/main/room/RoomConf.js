import {Col, Row} from "antd";

const RoomConf = (props) => {
  return (
    <Row style={{backgroundColor: '#fafafa', color: '#999999', border: '1px solid #cccccc', marginTop: '5px'}}>
      <Col span={12} style={{padding: '10px',}}>{props.confType}</Col>
      <Col span={12} style={{padding: '10px', textAlign: 'right'}}>{props.count}</Col>
    </Row>
  )
}

export default RoomConf;