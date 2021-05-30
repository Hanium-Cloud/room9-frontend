import styled from "styled-components";
import {HeartOutlined, MailOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {useHistory, useLocation} from 'react-router-dom';
import Color from "../../constant/Color";

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  height: 70px;
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
  ];

  const goTo = (path) => {
    history.replace(path);
  }

  return (
    <BottomContainer>
      {
        items.map((item) =>
            <BottomItem onClick={() => goTo(item.path)}>
              <item.icon style={{
                  fontSize: '20px',
                  color: item.path === location.pathname ? Color.Primary : 'rgba(0, 0, 0, 0.85)'
                }} />
            </BottomItem>
        )
      }
    </BottomContainer>
  );
}

export default BottomNavigation;