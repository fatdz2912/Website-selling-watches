import styled from "styled-components";
import { Row, Col, Select, Checkbox, Button, Card } from "antd";
import { color } from "themes/color";
export const ProductDetail = styled(Row)`
  min-height: 70vh;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Image = styled.img`
  width: 60%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
`;
export const Brands = styled.div`
  font-size: 2rem;
`;
export const Report = styled(Col)`
  font-size: 1rem;
  color: #626060;
  text-align: right;
  cursor: pointer;
`;
export const Name = styled.div`
  margin-top: 0.5;
  font-size: 1.1rem;
`;
export const Preview = styled.div`
  margin-top: 0.5em;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
`;
export const Evaluate = styled.div`
  text-align: center;
  font-size: 1.3rem;
  border-right: 1px solid #ccc;
  padding-right: 30px;
`;
export const Sold = styled.div`
  font-size: 1.3rem;
  text-align: center;
  padding: 4px 0;
`;
export const Discount = styled.div`
  font-size: 2rem;
  text-align: left;
  color: #f44242;
  display: ${(props) => (props.discount === "" ? "none" : "block")};
`;
export const Price = styled(Col)`
  background-color: #ccc;
  height: 8vh;
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  justify-content: center;
  align-items: center;
`;
export const NewPrice = styled.div`
  font-size: 2rem;
  display: flex;
`;
export const OldPrice = styled.div`
  font-size: 2rem;
  color: #a29f9f;
  text-decoration: line-through;
  display: ${(props) => (props.discount === "" ? "none" : "block")};
`;
export const Condition = styled.span`
  display: flex;
  align-items: center;
  margin-top: 1em;
  font-size: 1.2rem;
`;
export const Stock = styled.div`
  font-size: 1.2rem;
`;
export const Transport = styled.div`
  font-size: 1.2rem;
`;
export const AddCart = styled(Button)`
  margin-top: 1em;
  font-size: 1.6rem;
  min-height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Buy = styled(Button)`
  margin-top: 1em;
  font-size: 1.6rem;
  min-height: 8vh;
  width: 100%;
`;
export const QuantityWrapper = styled(Col)`
  cursor: pointer;
  margin-top: 1em;
  display: flex;

  & Button {
    font-size: 1.6rem;
    width: 7%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 1.5em;
`;
