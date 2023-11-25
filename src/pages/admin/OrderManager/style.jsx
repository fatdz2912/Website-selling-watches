import { Col, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";
export const Unit = styled.span`
  font-size: 0.75rem;
`;
export const CartListDetailWrapper = styled(Row)`
  background-color: #f5f5f5;
  padding: 16px;
`;
export const OrderManager = styled(Row)`
  max-width: 1000px;
  margin: 25px auto !important;
`;
export const CartItem = styled(Row)`
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid #ccc;
  padding-top: 15px;
`;

export const ImageCartWrapper = styled(Col)`
  text-align: center;
`;
export const ImageCart = styled.img``;
export const Name = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled(Col)`
  text-align: center;
`;
export const Price = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.outstanding};
    font-weight: 600;
    width: 100%;
    height: 100%;
  }
`;
export const FilterWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  background-color: #ccc;
  width: 100%;
`;
export const Quantity = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
export const Heading = styled.h1`
  color: ${color.primary};
  text-align: center;
`;
export const IntoMoney = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.outstanding};
    font-weight: 600;
    width: 100%;
    height: 100%;
  }
`;
export const TotalPrice = styled(Col)`
  display: flex;
  color: ${color.outstanding};
  font-weight: 600;
  width: 100%;
  height: 100%;
`;
