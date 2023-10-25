import styled from "styled-components";
import { Row, Col } from "antd";
import { color } from "themes/color";
export const PreviewWrapper = styled(Row)`
  margin-top: 3em;
  width: 100%;
  color: ${color.primary};
  background-color: #b3b1b1;
  padding: 16px;
`;
export const PreviewHead = styled(Col)`
  font-size: 1.4rem;
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
export const Comment = styled.div``;
export const ImageAndVideo = styled.div``;
