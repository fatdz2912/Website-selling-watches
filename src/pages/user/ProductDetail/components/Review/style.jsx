import styled from "styled-components";
import { Row, Col } from "antd";
import { color } from "themes/color";
export const ReviewWrapper = styled(Row)`
  margin: 3em auto !important;
  width: 100%;
  color: ${color.primary};
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
`;
export const ReviewHead = styled(Col)`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${color.outstanding};
`;
export const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RatingOverviewScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RatingOverview = styled.span`
  font-size: 3rem;
`;
export const RatingPeak = styled.span`
  font-size: 1.3rem;
`;
export const SearchOfOverview = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  gap: 7em;
`;
export const QuantityComment = styled.div``;
export const ImageAndVideo = styled.div``;

export const ReviewFormWrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  background-color: #f0f2f5;
  color: ${color.primary};
`;

export const ReviewItemWrapper = styled.div`
  margin-top: 8px;
  background-color: #ccc;
  border-radius: 8px;
  padding: 8px;
`;
export const Title = styled.label``;
export const Text = styled.label``;
export const Comment = styled.label`
  text-align: center;
  margin-left: 20px;
`;
export const avatar = styled.label`
  display: block;
  width: 70px;
  height: 70px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  & > img {
    border-radius: 50%;
    height: 100%;
  }
`;
