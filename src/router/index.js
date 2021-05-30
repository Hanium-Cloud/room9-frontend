import {BrowserRouter, Route} from "react-router-dom";

import SignIn from "../views/auth/SignIn";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn}>
      </Route>
    </BrowserRouter>
  )
}