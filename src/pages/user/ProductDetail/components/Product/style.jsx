import styled from "styled-components";
import { Row, Col, Button } from "antd";
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
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  filter: brightness(0.8);
  height: 100%;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
  object-fit: cover;
`;
export const Brands = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.outstanding};
  font-weight: 600;
  color: ${color.primaryText};
  font-size: 2rem;
  display: flex;
  max-width: 180px;
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
export const Preview = styled(Row)`
  width: 100%;
  margin-top: 0.5em;
  font-size: 1.1rem;
`;
export const Sold = styled(Col)`
  font-size: 1.3rem;
  text-align: center;
`;
export const Price = styled(Col)`
  background-color: #ccc;
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const CurrentPrice = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: center;
  color: ${color.outstanding};
  width: 50%;
  font-size: 1.7rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const OldPrice = styled.div`
  width: 50%;
  justify-content: center;
  font-size: 1.7rem;
  color: ${(props) => (props.discount !== 0 ? "#a19a9a" : `${color.primary}`)};
  text-decoration: ${(props) =>
    props.discount !== 0 ? "line-through" : "none"};
  display: ${(props) => (props.discount === 0 ? "none" : "flex")};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Unit = styled.span`
  font-size: 1rem;
`;
export const Title = styled(Col)`
  margin-top: 1em;
  font-size: 1.2rem;
`;
export const Info = styled(Row)`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const Desc = styled(Col)`
  text-align: center;
  margin-top: 1em;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${color.outstanding};
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
export const Discount = styled.div`
  z-index: 1;
  top: 2%;
  left: 1%;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: ${color.outstanding};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > p {
    color: ${color.primaryText};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
export const FullBox = styled.div`
  font-size: 1.4rem;
  border-radius: 4px;
  z-index: 1;
  top: 0;
  right: 0;
  position: absolute;
  width: 250px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    color: ${color.primaryText};
    font-weight: 600;
  }
`;
