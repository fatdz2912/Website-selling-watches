import styled from "styled-components";
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
export const MyAccountWrapper = styled.div`
  margin-top: 0.6em;
  display: flex;
  gap: 1em;
  align-items: center;
  position: relative;
`;
export const MyAccount = styled.span`
  font-size: 1rem;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
export const InformationAccount = styled.ul`
  left: 3.5em;
  position: absolute;
`;
export const Profile = styled.li`
  font-size: 1rem;
  margin-top: 0.6em;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
export const Address = styled.li`
  font-size: 1rem;
  margin-top: 0.6em;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
export const Password = styled.li`
  font-size: 1rem;
  margin-top: 0.6em;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
export const OrderWrapper = styled.div`
  margin-top: 7em;
  display: flex;
  gap: 1em;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 5em;
  }
`;
export const Order = styled.span`
  font-size: 1rem;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.7rem;
  }
`;
