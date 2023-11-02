import styled, { css } from "styled-components";
import { Row, Col } from "antd";
// Discount
export const DiscountListWrapper = styled.div`
  width: 100%;
  margin-top: 22vh;
  background-color: #f6f6f6;
  padding: 22px 18px;
  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;
export const HeadingDiscountList = styled.div`
  width: 100%;
  text-align: center;
`;
export const DiscountList = styled(Row)`
  display: flex !important;
  margin-top: 5vh;
`;
export const ProductDiscountItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;
  &:hover {
    filter: grayscale(100%);
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.7;
  }
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Heading = styled.div`
  font-size: 1rem;
  width: 100%;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Decribe = styled.span`
  text-align: center;
  font-size: 1rem;
  width: 100%;
  font-weight: 400;
`;

export const Discount = styled.div`
  font-size: 1.3rem;
  width: 100%;
  text-align: left;
  color: #f44242;
`;

export const Price = styled.div`
  margin-top: 1em;
  font-size: 1rem;
  width: 100%;
  display: flex;
`;
