import { Col, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const NavMenu = styled(Col)`
  cursor: pointer;
`;
export const MainWrapper = styled(Row)`
  background-color: ${color.primaryText};
  max-width: 1200px;
  width: 95%;
  flex: 1;
  margin: 0 auto !important;
  padding: 20px 0;
`;

export const MainContainer = styled(Col)`
  width: 100%;
  padding: 16px;
`;
