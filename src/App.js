import './App.css';
import {RecoilRoot} from "recoil";
import Router from "./router";
import styled from "styled-components";
import AppHeader from "./views/layouts/AppHeader";

const AppContainer = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

function App() {
  return (
    <RecoilRoot>
      <AppContainer>
        {/*<AppHeader />*/}
        <Router />
      </AppContainer>
    </RecoilRoot>
  );
}

export default App;
