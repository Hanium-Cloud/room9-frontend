import BannerText from "../../components/BannerText";
import MockData from "../../../constant/MockData";
import RoomCard from "../room/RoomCard";
import AppHeader from "../../layouts/AppHeader";
import PageHeader from "../../components/PageHeader";
import BottomNavigation from "../../layouts/BottomNavigation";
import {useEffect, useState} from "react";
import {myLikeRooms} from "../../../api/room";

const Like = (props) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        myLikeRooms().then((res) => {
            const results = res.data.room.map(room => ({
                'id': room.roomId,
                'thumbnailUrl': room?.images[0]?.url,
                'name': room.title,
                'region': room.location,
                'price': room.price,
                'score': room.avgScore,
                'reviewCount': room.reviewCount,
                'like': room.like,
            }));
            setRooms(results);
        });
    }, []);

  return (
    <div style={{paddingBottom: '70px'}}>
      <AppHeader />
      <PageHeader title="찜 목록" />
      <div>
          {
              rooms.map(room => (
                  <RoomCard key={room.id} room={room} />
              ))
          }
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Like;