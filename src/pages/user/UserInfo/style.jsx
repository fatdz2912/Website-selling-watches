import styled from "styled-components";
import { color } from "themes/color";
import { Row, Col } from "antd";
export const UserInfoWrapper = styled(Row)`
  width: 100%;
`;
export const Heading = styled.div`
  margin-left: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1vh;
`;
export const SubHeading = styled.h4`
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
export const Profile = styled(Row)``;
export const Left = styled(Col)``;
export const Right = styled(Col)``;

export const InfoUser = styled.div`
  display: flex;
  margin-top: 2vh;
  gap: 2em;
`;
export const Label = styled.div`
  width: 100px;
  max-width: 50%;
  text-align: right;
  font-weight: 500;
`;
export const Value = styled.div`
  color: ${color.primary};
`;
export const Changs = styled.div``;
