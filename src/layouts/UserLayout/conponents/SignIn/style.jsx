import { color } from "../../../../themes/color";
import styled, { css } from "styled-components";
import { Row, Col, Input, Menu, Modal, Form } from "antd";
const primaryText = color.primaryText;
const primary = color.primary;
export const ModalSignIn = styled(Modal)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;
export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Heading = styled.span`
  margin-top: 2vh;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;
export const SignInGoogle = styled.div`
  width: 80%;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2vh auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;
export const SignInFacebook = styled.div`
  width: 80%;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2vh auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;
export const SignInLineBreak = styled.div`
  border: solid #e1e1e1;
  border-width: 2px 0 0;
  margin: 35px auto 20px;
  width: 80%;
`;
export const SignInMSGText = styled.div`
  background: #fff;
  margin: -10px auto 0;
  text-align: center;
  width: 60px;
`;
export const DESC = styled.span`
  width: 80%;
  margin: 0 auto 4vh;
  display: block;
  font-size: 1rem;
  text-align: center;
`;
export const FormEmail = styled(Form)`
  width: 80%;
  margin: 0 auto;
`;
