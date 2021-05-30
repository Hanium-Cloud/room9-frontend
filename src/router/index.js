import {BrowserRouter, Redirect, Route} from "react-router-dom";

import SignIn from "../views/auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import Search from "../views/main/Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute path="/" component={Search} />
      <Redirect to="/signin" />
    </BrowserRouter>
  )
}