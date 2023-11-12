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
`;
const SidebarItem = styled.li`
  color: ${color.primaryText};
  &:hover {
    background-color: #90de90;
    color: #fff;
  }
  ${({ active }) =>
    active &&
    css`
      color: ${color.primaryText};
      border-right: 5px solid red;
      background-color: #05a005;
    `}
`;
export { SidebarWrapper, SidebarItem };
