import styled from "styled-components";
import Color from "../../constant/Color";
import {Button} from "antd";
import {useSetRecoilState} from "recoil";
import {userState} from "../../store/state";
import {useHistory} from 'react-router-dom';

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

  const login = async () => {
    // TODO 로그인 API 연동, 현재는 스터빙 해놓음
    await setUser({
      isLogin: true,
      name: 'testUser',
      email: 'testEmail@test.com',
    });

    history.push('/');
  }

  return (
    <BackGround>
      <LogoContainer>
        <LogoImage />
        <LogoSubscription>room9에서 마음에 드는 숙소를 찾아보세요</LogoSubscription>
      </LogoContainer>
      <ButtonContainer>
        <Button block onClick={() => login()}>Kakao로 로그인</Button>
      </ButtonContainer>
    </BackGround>
  )
}

export default SignIn;