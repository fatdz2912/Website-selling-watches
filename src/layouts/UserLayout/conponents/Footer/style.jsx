import { color } from "../../../../themes/color";
import styled, { css } from "styled-components";
import { Row, Col } from "antd";
export const FooterWrapper = styled.div`
  background-color: ${color.primary};
`;
export const Footer = styled(Row)`
  width: 95%;
  color: #c7bbbb;
  margin: 0 auto !important;
  padding: 16px;
  max-width: 1200px;
`;
export const Information = styled(Col)`
  text-align: center;
`;
export const Heading = styled.h3`
  font-size: 1.2rem;
  color: ${color.primaryText};
  text-align: center;
`;
export const DESC = styled.div`
  margin-top: 0.5em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ConnectFB = styled.div`
  margin-top: 0.5em;
  color: ${color.primaryText};
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const ConnectZalo = styled.div`
  color: ${color.primaryText};
  display: flex;
  align-items: center;
  gap: 1em;
  margin-top: 3vh;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageZaloWrapper = styled.div`
  width: 25px;
  border-radius: 8px;
`;
export const ImageZalo = styled.img`
  border-radius: 8px;
`;
