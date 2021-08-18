import BannerText from "../../components/BannerText";
import MockData from "../../../constant/MockData";
import RoomCard from "../room/RoomCard";
import AppHeader from "../../layouts/AppHeader";
import PageHeader from "../../components/PageHeader";
import BottomNavigation from "../../layouts/BottomNavigation";

const Like = (props) => {
  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <PageHeader title="찜 목록" />
      <div>
        {
          MockData.RoomCardMock.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))
        }
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Like;