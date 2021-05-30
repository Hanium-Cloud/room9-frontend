import styled from "styled-components";
import Color from "../../constant/Color";

const AppHeaderDiv = styled.div`
  width: 100%;
  background-color: ${Color.Primary};
  padding: 2px 0;
  text-align: center;
`;

const AppHeaderTitle = styled.span`
  color: ${Color.White};
  font-weight: bold;  
  font-size: 12px;
`;

const AppHeader = (props) => {
  return (
    <AppHeaderDiv>
      <AppHeaderTitle>room9</AppHeaderTitle>
    </AppHeaderDiv>
  )
};

export default AppHeader;