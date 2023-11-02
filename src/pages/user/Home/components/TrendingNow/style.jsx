import styled, { css } from "styled-components";
import { Row, Col } from "antd";
export const TrendingNowWrapper = styled.div`
  width: 100%;
  margin-top: 2vh;
  padding: 22px 18px;
  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;
export const HeadingTrendingNow = styled.div`
  width: 100%;
  text-align: center;
`;
export const TrendingNowList = styled(Row)`
  display: flex !important;
  margin: 5vh 0 0 !important;
`;
export const TrendingNowsItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  filter: brightness(0.97);
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
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
  font-size: 1rem;
  width: 100%;
  text-align: left;
  color: #f44242;
  margin-left: 1em;
  display: ${(props) => (props.discount !== "" ? "block" : "none")};
`;

export const Price = styled.div`
  margin-top: 1em;
  font-size: 1rem;
  width: 100%;
  display: flex;
`;
