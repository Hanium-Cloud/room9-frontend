import BannerText from "../../components/BannerText";
import MockData from "../../../constant/MockData";
import RoomCard from "../room/RoomCard";
import AppHeader from "../../layouts/AppHeader";
import PageHeader from "../../components/PageHeader";

const Like = (props) => {
  return (
    <>
      <AppHeader />
      <PageHeader title="찜 목록" />
      <div>
        {
          MockData.RoomCardMock.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))
        }
      </div>
    </>
  );
}

export default Like;