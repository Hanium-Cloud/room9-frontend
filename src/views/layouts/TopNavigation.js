import styled from "styled-components";
import Color from "../../constant/Color";
import {Col, Row} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

const Container = styled.div`
  background-color: ${Color.White};
  width: 100%;
  padding: 10px;
`

const TopNavigation = (props) => {
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col span={4}>
          <ArrowLeftOutlined onClick={() => {
            props.returnUrl ?
              history.push(props.returnUrl)
              :
              history.goBack();
          }} />
        </Col>
        <Col span={16} style={{textAlign: 'center'}}>
          { props.title ? props.title : '' }
        </Col>
        <Col span={4} />
      </Row>
    </Container>
  )
};

export default TopNavigation;