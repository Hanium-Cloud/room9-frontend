import {useSetRecoilState} from "recoil";
import {userState} from "../../store/state";
import {useHistory} from "react-router-dom";
import Axios from 'axios';
import {getMyInfo} from "../../api/user";
import {UserType} from "../../constant/User";

export const ACCESS_TOKEN_LOCAL_STORAGE = 'room9_access_token';
export const login = async (token = null, history, setUser, redirectUrl = null) => {
  if (token != null) { // 카카오 로그인 시도
    localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE, token);
    Axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    let response = await getMyInfo();
    let user = response.data;
    console.log(user);

    await setUser({
      id: user.id,
      isLogin: true,
      name: user.nickname,
      email: user.email,
      type: user.role,
      thumbnailUrl: user.thumbnailImgUrl,
    });

    if (redirectUrl != null) {
      history.push(redirectUrl)
    } else {
      if (user.role == UserType.Guest) {
        history.push('/');
      } else {
        history.push('/host/myroom')
      }
    }
   } else { // 자동 로그인 시도
    if (localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE) != null) {
      let token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE);
      Axios.defaults.headers['Authorization'] = `Bearer ${token}`;

      let response = await getMyInfo();
      let user = response.data;

      await setUser({
        id: user.id,
        isLogin: true,
        name: user.nickname,
        email: user.email,
        type: user.role,
        thumbnailUrl: user.thumbnailImgUrl,
      });

      if (redirectUrl != null) {
        history.push(redirectUrl)
      } else {
        if (user.role == UserType.Guest) {
          history.push('/');
        } else {
          history.push('/host/myroom')
        }
      }
    }
  }
}

export function getUrlParams() {
  var params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(str, key, value) {
      params[key] = value;
    }
  );

  return params;
}

const KakaoCallback = (props) => {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();

  let params = getUrlParams();
  let token = params.token;

  login(token, history, setUser);

  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default KakaoCallback;

