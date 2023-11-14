import styled from "styled-components";
import { color } from "themes/color";
import { Row, Col, Form } from "antd";
export const ChangePasswordWrapper = styled(Row)`
  width: 100%;
  background-color: ${color.primaryText};
  min-height: 35vh;
  padding: 16px;
  margin: 0 !important;
`;
export const Key = styled.div`
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const Heading = styled.div`
  margin-left: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1vh;
  width: 100%;
  max-height: 10vh;
`;
export const SubHeading = styled.h2`
  text-align: left;
  font-size: 1.2rem;
`;
export const FormHeading = styled.h2`
  text-align: left;
  font-size: 1.2rem;
  text-align: center;
  color: ${color.primary};
  margin: 16px 0 0;
`;
export const FormSubHeading = styled.div`
  text-align: left;
  font-size: 0.8rem;
  text-align: center;
  color: #a09b9b;
  margin: 8px 0 16px;
`;

export const ContentChangepassword = styled(Row)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
`;
export const FormChangePassword = styled(Form)`
  width: 80%;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  padding: 16px;
`;
export const Changs = styled.div``;
