import styled, { css } from "styled-components";
import { color } from "themes/color";
import { Col } from "antd";
export const SidebarWrapper = styled(Col)``;
export const UserWithAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 30px;
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

  &:hover {
    background-color: #11bc11;
  }

  ${({ active }) =>
    active &&
    css`
      border-right: 5px solid ${color.primary};
      background-color: #2aa22a;
      color: ${color.primaryText};
      &:hover {
        background-color: #11bc11;
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
