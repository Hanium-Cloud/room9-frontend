import styled from "styled-components";

const BackGround = styled.div`
  background-color: #049FFF;
  width: 100%;
  height: 100vh;
`;

const SignIn = (props) => {
  return (
    <BackGround>
      <img src="/images/logo.png" alt=""/>
      hello, world
    </BackGround>
  )
}

export default SignIn;