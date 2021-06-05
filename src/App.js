import './App.css';
import {RecoilRoot} from "recoil";
import Router from "./router";
import styled from "styled-components";
import AppHeader from "./views/layouts/AppHeader";

const AppContainer = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
