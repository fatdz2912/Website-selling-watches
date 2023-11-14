import { Col, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavMenu = styled(Col)`
  cursor: pointer;
`;
export const ProfileMainWrapper = styled(Row)`
  max-width: 1200px;
  width: 95%;
  flex: 1;
  margin: 0 auto !important;
  padding: 20px 0;
`;

export const ProfileMainContainer = styled(Col)`
  width: 100%;
`;
