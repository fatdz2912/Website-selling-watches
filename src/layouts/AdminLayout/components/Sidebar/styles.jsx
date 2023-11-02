import styled, { css } from "styled-components";
import { color } from "themes/color";
const SidebarWrapper = styled.ul`
  position: absolute;
  width: 250px;
  left: ${(props) => (props.isShowSidebar ? "0px" : "-250px")};
  background-color: #ccc;
  transition: all 0.3s;
  height: 100%;
`;
const SidebarItem = styled.li`
  color: ${color.primary};
  &:hover {
    background-color: ${color.primary};
    color: #fff;
  }
  ${({ active }) =>
    active &&
    css`
      border-right: 5px solid #000;
      background-color: ${color.primaryText};
    `}
`;
export { SidebarWrapper, SidebarItem };
