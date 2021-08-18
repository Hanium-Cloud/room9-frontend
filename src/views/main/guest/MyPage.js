import AppHeader from "../../layouts/AppHeader";
import UserCard from "../../components/UserCard";
import MockData from "../../../constant/MockData";
import SimpleList from "../../components/SimpleList";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/state";
import {UserType} from "../../../constant/User";
import BottomNavigation from "../../layouts/BottomNavigation";

const guestItems = [
  {icon: '', name: '예약 내역', path: '/mypage/reservation'},
  {icon: '', name: '내 리뷰', path: ''},
  {icon: '', name: '호스트 전환', path: ''},
  {icon: '', name: '커뮤니티', path: ''},
  {icon: '', name: '로그아웃', path: ''},
];

const hostItems = [
  {icon: '', name: '예약 내역', path: ''},
  {icon: '', name: '게스트 전환', path: ''},
  {icon: '', name: '이용 약관', path: ''},
  {icon: '', name: '로그아웃', path: ''},
];

const MyPage = (props) => {
  const user = useRecoilValue(userState);

  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
        <UserCard user={MockData.mockGuestUser} showType={true}/>
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

export default MyPage;