import {BrowserRouter, Redirect, Route} from "react-router-dom";

import SignIn from "../views/auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Search from "../views/main/guest/Search";
import Like from "../views/main/guest/Like";
import Message from "../views/main/guest/Message";
import MyPage from "../views/main/guest/MyPage";
import KakaoCallback from "../views/auth/KakaoCallback";
import RoomDetail from "../views/main/room/RoomDetail";
import RoomReserve from "../views/main/room/RoomReserve";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/auth/callback/kakao" component={KakaoCallback} />
      <PrivateRoute exact path="/" component={Search} />
      <PrivateRoute exact path="/like" component={Like} />
      <PrivateRoute exact path="/message" component={Message} />
      <PrivateRoute exact path="/mypage" component={MyPage} />
      <PrivateRoute exact path="/room/:roomId" component={RoomDetail} />
      <PrivateRoute exact path="/room/:roomId/reserve" component={RoomReserve} />
      <Redirect to="/signin" />
    </BrowserRouter>
  )
}


