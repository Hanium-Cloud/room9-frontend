import styled from "styled-components";
import Color from "../../constant/Color";
import {Button} from "antd";
import {useSetRecoilState} from "recoil";
import {userState} from "../../store/state";
import {useHistory} from 'react-router-dom';
import {UserType} from "../../constant/User";
import {getUrlParams, login} from "./KakaoCallback";

const BackGround = styled.div`
  background-color: #049FFF;
  width: 100%;
  height: 100vh;
`;

const LogoContainer = styled.div`
  padding: 100px 0 50px 0;
`;

const LogoImage = styled.div`
  width: 100%;
  height: 150px;
  background-image: url("/images/logo.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

const LogoSubscription = styled.p`
  font-size: 14px;
  color: ${Color.White};
  text-align: center;
  margin: 10px 0 0 0;
`;

const ButtonContainer = styled.div`
  padding: 20px 40px;
`;

const SignIn = (props) => {
  const setUser = useSetRecoilState(userState);
  const history = useHistory();
  const params = getUrlParams();

  console.log(params);
  if (params.returnUrl) {
    login(null, history, setUser, params.returnUrl);
  } else {
    login(null, history, setUser);
  }


  const toKakaoLogin = () => {
    let url = window.location.href;
    let redirectUri = url.slice(0, url.indexOf('/', 9));

    let kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?`;
    kakaoLoginUrl += `client_id=64dfaa62a542bcefe16d09bd77b6ca8c`;
    kakaoLoginUrl += `&redirect_uri=https://api.room9.shop/oauth2/callback/kakao`;
    kakaoLoginUrl += `&response_type=code`;
    kakaoLoginUrl += `&state={"redirectUri":"${redirectUri}/signin/callback/kakao"}`
    window.location.href = kakaoLoginUrl;
  };

  return (
    <BackGround>
      <LogoContainer>
        <LogoImage />
        <LogoSubscription>room9에서 마음에 드는 숙소를 찾아보세요</LogoSubscription>
      </LogoContainer>
      <ButtonContainer>
        <div onClick={() => toKakaoLogin()} style={{textAlign: 'center'}}>
          <img src="/images/kakao_login_medium_narrow.png" alt=""/>
        </div>
      </ButtonContainer>
    </BackGround>
  )
}

export default SignIn;