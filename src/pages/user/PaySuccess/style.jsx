import { Button, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const SuccessPayWrapper = styled(Row)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  background: #f5f5f5;
`;
export const SuccessPay = styled(Row)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  width: 80%;
  padding: 32px 16px;
  background-color: ${color.primaryText};
  box-shadow: 0 0 0 1px #ccc;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    width: 90%;
  }
`;
export const Heading = styled.h2`
  font-size: 1.8rem;
  color: #0fe40f;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const OrderNumber = styled.div`
  margin-top: 20px;
  font-size: 1.3rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Number = styled.span`
  color: #0fe40f;
`;
export const Revert = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-top: 20px;
  color: ${color.primaryText};
  font-weight: 700;
  background-color: #0fe40f;
`;
