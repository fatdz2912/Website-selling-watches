import { Button, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const FilterWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  background-color: #ccc;
`;
export const ProductManager = styled(Row)`
  max-width: 1000px;
  margin: 25px auto !important;
`;
export const ProductManagerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Heading = styled.h1`
  color: ${color.primary};
`;
export const BTSubmit = styled(Button)`
  background-color: ${color.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
