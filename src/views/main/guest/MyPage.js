import AppHeader from "../../layouts/AppHeader";
import UserCard from "../../components/UserCard";
import MockData, {avatarUrl1} from "../../../constant/MockData";
import SimpleList from "../../components/SimpleList";
import {useRecoilState, useRecoilValue} from "recoil";
import {userState} from "../../../store/state";
import {UserType} from "../../../constant/User";
import BottomNavigation from "../../layouts/BottomNavigation";
import {Redirect, useHistory} from "react-router-dom";
import {changeRole} from "../../../api/user";

const guestItems = [
  {icon: '', name: '예약 내역', path: '/mypage/reservation'},
  {icon: '', name: '내 리뷰', path: ''},
  {icon: '', name: '호스트 전환', path: '/mypage/changerole'},
  {icon: '', name: '커뮤니티', path: ''},
  {icon: '', name: '내정보 수정', path: '/mypage/modify'},
  {icon: '', name: '로그아웃', path: '/mypage/logout'},
];

const hostItems = [
  {icon: '', name: '예약 내역', path: ''},
  {icon: '', name: '게스트 전환', path: '/mypage/changerole'},
  {icon: '', name: '이용 약관', path: ''},
  {icon: '', name: '로그아웃', path: '/mypage/logout'},
];

const MyPage = (props) => {
  const user = useRecoilValue(userState);

  let userCardData = {
    avatarUrl: user.thumbnailUrl,
    name: user.name,
    type: user.type,
    mobile: '',
    email: user.email
  }

  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
        <UserCard user={userCardData} showType={true}/>
      </div>
      <div>
        <ul>
          <SimpleList items={user.type === UserType.Guest ? guestItems : hostItems} />
          </ul>
      </div>
      <BottomNavigation />
    </div>
  );
}

export const MyPageChangeRole = (props) => {
  const user = useRecoilValue(userState);
  const history = useHistory();

  changeRole(user.id).then(() => {
      history.push('/signin');
    });

  return (
    <div>
      바꾸는중입니다.. 잠시만 기다려주세요 ..
    </div>
  );
}

export const MyPageLogout = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  setUser({
    isLogin: false,
    id: -1,
    name: '',
    email: '',
    type: 'guest',
    thumbnailUrl: '',
  });
  localStorage.clear();

  history.push('/signin')

  return (
    <div>
      로그아웃 중입니다..
    </div>
  )
}

export default MyPage;