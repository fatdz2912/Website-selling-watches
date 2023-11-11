import { color } from "themes/color";
import styled, { css } from "styled-components";
import { Row, Col, Input, Modal, Card } from "antd";
// Header Top wrapper
const primaryText = color.primaryText;
const primary = color.primary;
export const HeaderWrapper = styled.div`
  box-shadow: 0 0 0 1px ${color.primary};
  background-color: ${color.primaryText};
`;
export const HeaderTopWrapper = styled.div`
  background-color: #302e2e;
  color: ${primaryText};
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderTopBlock = styled(Row)`
  height: 100%;
  width: 100%;
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
  font-weight: 400;
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
`;
export const IconMessage = styled.div`
  margin-top: 0.5rem;
`;
// Header Tool Bar
export const HeaderToolBar = styled(Row)`
  width: 100%;
  margin: 3vh auto 0 !important;
  position: relative;
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
  border-bottom: 3px solid #fff;
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
