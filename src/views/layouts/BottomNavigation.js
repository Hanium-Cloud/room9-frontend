import styled from "styled-components";
import {HeartOutlined, MailOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {useHistory, useLocation} from 'react-router-dom';
import Color from "../../constant/Color";

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  border-top: 2px solid #fafafa;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomItem = styled.div`
  flex-grow: 1;
  text-align: center;
`;


const BottomNavigation = (props) => {
  const location = useLocation();
  const history = useHistory();

  console.log(location);

  const items = [
    {path: '/', icon: SearchOutlined},
    {path: '/like', icon: HeartOutlined},
    {path: '/message', icon: MailOutlined},
    {path: '/mypage', icon: UserOutlined},
  ]

  return (
    <BottomContainer>
      {
        items.map((item) =>
            <BottomItem>
              <item.icon onClick={() => history.push(item.path)} style={{
                  fontSize: '20px',
                  color: item.path === location.pathname ? Color.Primary : 'rgba(0, 0, 0, 0.85)'
                }} />
            </BottomItem>
        )
      }

      {/*<BottomItem><SearchOutlined style={{fontSize: '20px'}} /></BottomItem>*/}
      {/*<BottomItem><HeartOutlined style={{fontSize: '20px'}} /></BottomItem>*/}
      {/*<BottomItem><MailOutlined style={{fontSize: '20px'}} /></BottomItem>*/}
      {/*<BottomItem><UserOutlined style={{fontSize: '20px'}} /></BottomItem>*/}
    </BottomContainer>
  );
}

export default BottomNavigation;