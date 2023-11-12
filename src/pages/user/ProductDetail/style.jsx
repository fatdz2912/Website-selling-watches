import styled from "styled-components";
import { Col, Row } from "antd";
import { color } from "themes/color";
export const ProductDetailWrapper = styled(Row)`
  max-width: 1200px;
  padding: 32px 16px;
  background-color: ${color.primaryText};
  margin-top: 20px;
`;
export const TitleDESC = styled.div`
  font-size: 1.4rem;
  color: ${color.primary};
`;
export const Description = styled(Col)`
  margin-top: 3em;
  text-align: justify;
`;
export const DESC = styled.div`
  font-size: 1rem;
  color: #4f4c4c;
`;
export const Guaranteed = styled(Col)`
  padding: 16px;
  margin-top: 2em;
  background-color: #f5f5f5;
  font-size: 1rem;
`;
export const ImageGuranteedWrapper = styled(Col)`
  margin-top: 2em;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
