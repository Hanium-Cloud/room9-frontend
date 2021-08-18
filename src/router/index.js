import {BrowserRouter, Redirect, Route, useLocation} from "react-router-dom";

import SignIn from "../views/auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Search from "../views/main/guest/Search";
import Like from "../views/main/guest/Like";
import Message from "../views/main/guest/Message";
import MyPage from "../views/main/guest/MyPage";
import KakaoCallback from "../views/auth/KakaoCallback";
import RoomDetail from "../views/main/room/RoomDetail";
import RoomReserve from "../views/main/room/RoomReserve";
import {useEffect} from "react";
import MyRoom from "../views/main/host/MyRoom";
import HostReservation from "../views/main/host/HostReservation";
import GuestReservation from "../views/main/reservation/GuestReservation";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Common */}
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/auth/callback/kakao" component={KakaoCallback} />

      {/* Guest */}
      <PrivateRoute exact path="/" component={Search} />
      <PrivateRoute exact path="/like" component={Like} />
      <PrivateRoute exact path="/message" component={Message} />
      <PrivateRoute exact path="/room/:roomId" component={RoomDetail} />
      <PrivateRoute exact path="/room/:roomId/reserve" component={RoomReserve} />

      <PrivateRoute exact path="/mypage" component={MyPage} />
      <PrivateRoute exact path="/mypage/reservation" component={GuestReservation} />

      {/* Host */}
      <PrivateRoute exact path="/host/myroom" component={MyRoom} />
      <PrivateRoute exact path="/host/reservation" component={HostReservation} />

      {/* Common */}
      <Redirect to="/signin" />
    </BrowserRouter>
  )
}


