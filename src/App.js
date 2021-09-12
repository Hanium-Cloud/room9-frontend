import './App.css';
import {RecoilRoot} from "recoil";
import Router from "./router";
import styled from "styled-components";
import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.room9.shop';

const AppContainer = styled.div`
  width: 100%;
  max-width: 550px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  background-color: #fafafa;
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
