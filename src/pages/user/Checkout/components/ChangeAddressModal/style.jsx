import styled from "styled-components";
import { color } from "themes/color";
import { Row, Col, Button } from "antd";
export const Left = styled(Col)`
  margin-top: 30px;
`;
export const AddressItem = styled(Row)`
  border-top: 1px solid #ccc;
  padding-top: 1vh;
  width: 100%;
  margin-bottom: 15px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;
export const Name = styled.span`
  font-size: 1rem;
  font-weight: 600;
  border-right: 1px solid #ccc;
  padding-right: 10px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const PhoneNumber = styled.span`
  color: rgba(0, 0, 0, 0.54);
`;
export const InfoAddress = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.54);
`;
export const AddressDefault = styled.div`
  margin-top: 10px;
  color: ${color.primary};
  border: 1px solid ${color.primary};
  padding: 4px;
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const Right = styled(Col)`
  text-align: right;
  margin-top: 30px;
`;
export const UpdateAndDeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
`;
export const Update = styled.div`
  color: ${color.outstanding};
`;
export const Delete = styled.div`
  color: ${color.outstanding};
`;
export const EstablishDefault = styled(Button)`
  margin-top: 15px;
`;
