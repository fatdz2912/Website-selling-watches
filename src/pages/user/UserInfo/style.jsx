import styled from "styled-components";
import { color } from "themes/color";
import { Row } from "antd";
export const UserInfoWrapper = styled(Row)`
  width: 100%;
  background-color: ${color.primaryText};
  min-height: 35vh;
  padding: 16px;
`;
export const Heading = styled.div`
  margin-left: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1vh;
  width: 100%;
`;
export const SubHeading = styled.h2`
  text-align: left;
  font-size: 1.2rem;
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  max-width: 20%;
  margin: 0 auto;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
`;
export const Profile = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export const InfoUser = styled.div`
  margin-top: 2vh;
  gap: 2em;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Label = styled.div`
  width: 100px;
  max-width: 50%;
  text-align: right;
  font-weight: 500;
  min-width: 120px;
`;
export const Value = styled.div`
  color: ${color.primary};
`;
export const Changs = styled.div``;
