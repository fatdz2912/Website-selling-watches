import { Col, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";
export const FavoriteWrapper = styled.div`
  width: 100%;
  background-color: ${color.primaryText};
  min-height: 50vh;
  padding: 32px;
  @media screen and (max-width: 576px) {
    padding: 5px;
  }
`;
export const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  padding: 10px;
  font-size: 1.3rem;
  font-weight: 650;
  gap: 1rem;
`;
export const FavoriteList = styled.div`
  margin-top: 15px;
  width: 100%;
`;
export const FavoriteItem = styled(Row)`
  border-top: 1px solid #ccc;
  padding-top: 1vh;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled(Col)`
  margin-top: 15px;
  width: 100%;
`;
export const Name = styled(Col)`
  width: 100%;
  color: ${color.primary};
`;
export const Heart = styled(Col)`
  width: 100%;
  text-align: center;
`;
export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
