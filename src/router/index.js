import {BrowserRouter, Redirect, Route} from "react-router-dom";

import SignIn from "../views/auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Search from "../views/main/Search";
import Like from "../views/main/Like";
import Message from "../views/main/Message";
import MyPage from "../views/main/MyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={Search} />
      <PrivateRoute exact path="/like" component={Like} />
      <PrivateRoute exact path="/message" component={Message} />
      <PrivateRoute exact path="/mypage" component={MyPage} />
      <Redirect to="/signin" />
    </BrowserRouter>
  )
}