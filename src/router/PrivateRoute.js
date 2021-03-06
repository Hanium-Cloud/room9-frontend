import {Redirect, Route} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../store/state";
import BottomNavigation from "../views/layouts/BottomNavigation";

const PrivateRoute = ({component: Component, ...parentProps}) => {
  const user = useRecoilValue(userState);

  const checkAuth = () => {
      return user.isLogin;
  };

  const returnUrl=window.location.pathname;

  return (
    <Route
      {...parentProps}
      render={props => (
        checkAuth() ? (
          <div>
            <Component {...props} />
          </div>
      ) : (
          <Redirect to={`/signin?returnUrl=${returnUrl}`} />
        )
      )}
    />
  );
}

export default PrivateRoute;