import { Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";
export const Unit = styled.span`
  font-size: 0.75rem;
`;
export const AccountManager = styled(Row)`
  max-width: 1200px;
  margin: 25px auto !important;
  width: 100%;
`;
export const FilterWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  background-color: #ccc;
  width: 100%;
`;
export const Heading = styled.h1`
  width: 100%;
  color: ${color.primary};
  text-align: center;
`;
