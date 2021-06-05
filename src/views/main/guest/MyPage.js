import AppHeader from "../../layouts/AppHeader";
import PageHeader from "../../components/PageHeader";
import UserCard from "../../components/UserCard";
import MockData from "../../../constant/MockData";
import SimpleList from "../../components/SimpleList";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/state";
import {UserType} from "../../../constant/User";

const guestItems = [
  {icon: '', name: '예약 내역'},
  {icon: '', name: '내 리뷰'},
  {icon: '', name: '호스트 전환'},
  {icon: '', name: '커뮤니티'},
  {icon: '', name: '로그아웃'},
];

const hostItems = [
  {icon: '', name: '예약 내역'},
  {icon: '', name: '게스트 전환'},
  {icon: '', name: '이용 약관'},
  {icon: '', name: '로그아웃'},
];

const MyPage = (props) => {
  const user = useRecoilValue(userState);

  return (
    <>
      <AppHeader />
      <PageHeader title="마이페이지" />

      <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
        <UserCard user={MockData.mockGuestUser} showType={true}/>

      </div>
      <div>
        <ul>
          <SimpleList items={user.type === UserType.Guest ? guestItems : hostItems} />
          </ul>
      </div>
    </>
  );
}

export default MyPage;