import { color } from "../../../../themes/color";
import styled, { css } from "styled-components";
import { Row, Col, Input, Menu, Modal } from "antd";
// Header Top wrapper
const primaryText = color.primaryText;
const primary = color.primary;
export const HeaderWrapper = styled.div``;
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
  width: 95%;
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
  cursor: pointer;
`;
export const IconMessage = styled.div`
  margin-top: 0.5rem;
`;
// Header Tool Bar
export const HeaderToolBar = styled(Row)`
  background-color: ${primaryText};
  width: 95%;
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
`;
// Menu Wrapper
export const MenuDeskWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    display: none;
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
export const MenuMobileAndTabletWrapper = styled(Menu)`
  padding: 16px;
  width: 100% !important;
  height: 100% !important;
`;
export const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 470;
  color: ${primary};
  border-bottom: 3px solid #fff;
  padding-bottom: 1vh;

  &:hover {
    cursor: pointer;
    border-bottom: 3px ${primary} solid;
  }
`;
