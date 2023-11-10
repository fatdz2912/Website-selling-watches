import { color } from "../../../themes/color";
import styled from "styled-components";
import { Row, Col } from "antd";
const primaryText = color.primaryText;
export const HomeWrapper = styled(Row)`
  width: 100%;
  max-width: 1200px;
  background-color: ${color.primaryText};
  padding: 16px;
`;
// Logo wrapper
export const LogoWrapper = styled(Col)``;
export const Logo = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  height: 100%;
`;
export const TypedClockList = styled(Row)`
  width: 70%;
  margin: 5vh auto 0;
  box-shadow: 0 0 0 2px #f0efef;
  padding: 16px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${primaryText};
  border-radius: 3px;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TypeClockItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;
export const ImageTypeWrapper = styled.div`
  width: 50%;
`;
export const ImageTypeClock = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  &:hover {
    filter: grayscale(50%);
    cursor: pointer;
    transition: all 0.3s;
  }
`;
export const NameTypeClock = styled.div`
  margin-top: 1em;
  font-size: 1.2rem;
`;
export const TypeClockMobile = styled(Row)`
  margin-top: 2vh;
  width: 100%;
  background-color: ${color.primary};
  height: 4vh;
  color: ${color.primaryText};
  padding: 16px;
  border-radius: 4px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const TypedMobileItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
