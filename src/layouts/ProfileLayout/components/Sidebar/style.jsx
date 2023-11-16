import styled, { css } from "styled-components";
import { color } from "themes/color";
import { Col } from "antd";
export const SidebarWrapper = styled(Col)``;
export const UserWithAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  @media screen and (max-width: 400px) {
    gap: 0.2em;
  }
`;
export const ProfileMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${color.primary};
  transition: all 0.2s;
  margin-top: 5px;
  &:hover {
    background-color: ${color.background_Color};
  }

  ${({ active }) =>
    active &&
    css`
      border-right: 5px solid #000;
      background-color: ${color.primary};
      color: ${color.primaryText};
      &:hover {
        color: ${color.primary};
        background-color: ${color.background_Color};
      }
    `}
`;
export const AvatarWrapper = styled.div`
  width: 50px;
  max-width: 20%;
`;
export const Username = styled.span`
  font-size: 1rem;
  color: ${color.primary};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
`;
