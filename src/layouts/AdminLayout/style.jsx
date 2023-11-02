import styled from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
`;
export const LayoutAdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const MainContainer = styled.div`
  margin-left: ${(props) => (props.isShowSidebar ? "250px" : "0px")};
  width: 100%;
  transition: all 0.3s;
`;
