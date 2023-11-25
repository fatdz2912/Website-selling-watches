import styled, { css } from "styled-components";
import { color } from "themes/color";
const SidebarWrapper = styled.ul`
  margin-top: 1.25px;
  position: absolute;
  width: 250px;
  left: ${(props) => (props.isShowSidebar ? "0px" : "-250px")};
  background-color: ${color.primary};
  transition: all 0.3s;
  height: 100%;
  border-right: 1px solid ${color.primary};
`;
const SidebarItem = styled.li`
  background-color: ${color.background_Color};
  color: #000;
  border-bottom: 1px solid #a1eaa1;
  padding: 4px 8px;
  &:hover {
    background-color: #23239e;
    color: #fff;
  }
  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background-color: #2b2bc9;
      border-right: 5px solid red;
      &:hover {
        color: ${color.primaryText};
        background-color: #1d1d8b;
      }
    `}
`;
export { SidebarWrapper, SidebarItem };
