import { color } from "../../../../../themes/color";
import styled, { css } from "styled-components";
import { Row, Col } from "antd";
const primaryText = color.primaryText;
const primary = color.primary;
// LimitedOffersWrapper
export const LimitedOffersWrapper = styled.div`
  width: 100%;
  margin-top: 22vh;
  background-color: #f6f6f6;
  padding: 22px 18px;
  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;
export const HeadingLimitedOffers = styled.div`
  width: 100%;
  text-align: center;
`;
export const LimitedOfferList = styled(Row)`
  display: flex !important;
  margin-top: 5vh;
`;
export const LimitedOffersItem = styled(Col)`
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
  align-items: center;
  box-shadow: 0 0 0 2px #f0efef;
  width: 100%;
  padding: 4px;
`;
export const Heading = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const Decribe = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const Discount = styled.div`
  font-size: 1.2rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  text-align: center;
  color: #f44242;
`;
