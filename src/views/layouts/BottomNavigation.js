import styled from "styled-components";
import {
  CheckCircleOutlined,
  HeartOutlined,
  HomeOutlined,
  MailOutlined,
  SearchOutlined,
  UserOutlined
} from "@ant-design/icons";
import {useHistory, useLocation} from 'react-router-dom';
import Color from "../../constant/Color";
import {useRecoilValue} from "recoil";
import {userState} from "../../store/state";
import {UserType} from "../../constant/User";

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
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
`;

const BottomItem = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const guestItems = [
  {path: '/', icon: SearchOutlined, name: '검색'},
  {path: '/like', icon: HeartOutlined, name: '찜'},
  // {path: '/message', icon: MailOutlined, name: '메시지'},
  {path: '/mypage', icon: UserOutlined, name: '마이페이지'},
];

const hostItems = [
  {path: '/host/myroom', icon: HomeOutlined, name: '내 숙소'},
  {path: '/host/reservation', icon: CheckCircleOutlined, name: '예약 확인'},
  // {path: '/host/message', icon: MailOutlined, name: '메시지'},
  {path: '/mypage', icon: UserOutlined, name: '마이페이지'},
];

const BottomNavigation = (props) => {
  const location = useLocation();
  const history = useHistory();
  const user = useRecoilValue(userState);

  const goTo = (path) => {
    history.replace(path);
  }

  let items = user.type === UserType.Guest ? guestItems : hostItems;

  return (
    <BottomContainer>
      {
          items.map((item, idx) =>
            <BottomItem key={idx} onClick={() => goTo(item.path)}>
              <item.icon style={{
                  fontSize: '20px',
                  color: item.path === location.pathname ? Color.Primary : 'rgba(0, 0, 0, 0.85)',
                  display: 'block',
                }} />
              <span style={{
                fontSize: '10px',
                color: item.path === location.pathname ? Color.Primary : 'rgba(0, 0, 0, 0.85)',
              }}>{item.name}</span>
            </BottomItem>
        )
      }
    </BottomContainer>
  );
}

export default BottomNavigation;