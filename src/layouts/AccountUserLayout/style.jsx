import { Col, Row } from "antd";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainWrapper = styled(Row)`
  width: 95%;
  flex: 1;
  margin: 0 auto !important;
  max-width: 1200px;
  padding: 20px 0;
`;

export const MainContainer = styled(Col)`
  background-color: #f5f5f5;
  width: 100%;
  padding: 16px;
`;
