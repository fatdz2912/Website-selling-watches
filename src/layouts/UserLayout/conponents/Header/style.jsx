import { color } from "themes/color";
import styled, { css } from "styled-components";
import { Row, Col, Input, Modal, Card } from "antd";
// Header Top wrapper
const primaryText = color.primaryText;
const primary = color.primary;
export const HeaderWrapper = styled.div`
  background-color: ${color.primaryText};
  height: 22vh;
  position: sticky;
  top: 0;
  z-index: 3;
  padding-bottom: 16px;
  @media screen and (min-width: 769px) and (max-width: 1199px) {
    height: 30vh;
  }
`;

export const HeaderTopWrapper = styled.div`
  background-color: ${color.primary};
  color: ${primaryText};
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderTopBlock = styled(Row)`
  height: 100%;
  width: 95%;
  max-width: 1200px;
  position: relative;
`;
export const AngleUp = styled.div`
  top: 60vh;
  right: 2vh;
  position: absolute;
  width: 10px;
  cursor: pointer;
  padding: 10px;
  display: ${(props) => (props.isHiddenAngleUp ? "block" : "none")};
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const HeaderDiscount = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: left;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const HeaderTopLeft = styled(Col)``;
export const HeaderTopRight = styled(Col)``;

export const LinkDiscount = styled.div`
  color: #ff0000;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
export const ChatCall = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1em;
  cursor: pointer;
`;
export const IconMessage = styled.div`
  margin-top: 0.5rem;
`;
// Header Tool Bar
export const HeaderToolBar = styled(Row)`
  width: 95%;
  max-width: 1200px;
  margin: 3vh auto 0 !important;
`;

export const HeaderLogo = styled(Col)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const NavMenu = styled(Col)`
  cursor: pointer;
`;
export const ImageLogo = styled.img`
  width: 182px;
  height: 22px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    width: 135px;
    height: 18px;
  }
`;
export const SearchColumn = styled(Col)``;
export const InputSearch = styled(Input)`
  padding: 4px 8px;
`;
export const LoginAndCart = styled(Col)`
  display: flex;
  align-items: center;
  gap: 2em;
  justify-content: right;
  @media screen and (max-width: 400px) {
    gap: 5px;
  }
`;
export const Login = styled(Col)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const HeadingLogin = styled(Col)`
  font-size: 1rem;
  color: ${color.primary};
`;
// Menu Wrapper
export const MenuDeskWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin: 0 auto;

  ${(props) =>
    props.isHiddenMenu === false
      ? css`
          flex-direction: column;
          width: 100%;
          text-align: center;
        `
      : css``};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuMobileAndTabletWrapper = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  text-align: center;
  ${(props) => (props.isHiddenMenu === false ? css`` : css``)};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const MenuModal = styled(Modal)`
  position: absolute;
  top: 6vh;
  left: 0;
  display: block;
  width: 20vw !important;
  min-width: 300px;
  background-color: #f8f8f8;
  padding: 0 !important;
`;
export const CardMenuMobileAndTablet = styled(Card)``;
export const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 470;
  color: ${primary};
  border-bottom: 3px solid ${color.primaryText};
  padding-bottom: 1vh;
  ${(props) =>
    props.isHiddenMenu === false
      ? css`
          width: 100%;
          border: 1px solid ${color.primary};
          &:hover {
            border-bottom: 1px ${primary} solid !important;
            background-color: #b6b6b6;
          }
        `
      : css``};

  &:hover {
    cursor: pointer;
    border-bottom: 3px ${primary} solid;
  }
`;
