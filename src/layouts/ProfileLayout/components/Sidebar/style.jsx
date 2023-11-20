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
      border-right: 5px solid ${color.outstanding};
      background-color: ${color.primary};
      color: ${color.primaryText};
      &:hover {
        color: ${color.primary};
        background-color: ${color.background_Color};
      }
    `}
`;
export const AvatarWrapper = styled.div`
  width: 80px;
  max-width: 50%;
  margin: 0 auto;
  border-radius: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Username = styled.div`
  font-size: 1rem;
  color: ${color.primary};
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  height: 100%;
`;
export const AvatarEdit = styled.div`
  position: absolute;
  right: 4px;
  bottom: 4px;
  z-index: 1;

  & > input {
    display: none;
  }

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    margin-bottom: 0;
    border-radius: 100%;
    background: #ffffff;
    border: 1px solid #e3e4e6;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
      border-color: #d6d6d6;
    }
  }
`;
