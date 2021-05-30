import {Redirect, Route} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../store/state";
import BottomNavigation from "../views/layouts/BottomNavigation";

const PrivateRoute = ({component: Component, ...parentProps}) => {
  const user = useRecoilValue(userState);

  const checkAuth = () => {
    console.log('hello');
    console.log(user);
    return user.isLogin;
  };

  return (
    <Route
      {...parentProps}
      render={props => (
        checkAuth() ? (
          <div>
            <Component {...props} />
            <BottomNavigation />
          </div>
      ) : (
          <Redirect to="/signin" />
        )
      )}
    />
  );
}

export default PrivateRoute;