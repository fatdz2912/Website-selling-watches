import { Button, Form, Input, Modal } from "antd";
import { FaGoogle, FaFacebook } from "react-icons/fa";

import * as S from "./style";
function SignIn({ setIsShowSignIn, isShowSignIn }) {
  return (
    <S.ModalSignIn
      open={isShowSignIn}
      onCancel={() => setIsShowSignIn(false)}
      footer={null}
    >
      <S.Title>My Account</S.Title>
      <S.Heading>Sign In To Jomashop</S.Heading>
      <S.SignInGoogle>
        <FaGoogle size={25} color="green" />
        <span>Sign in with Google</span>
      </S.SignInGoogle>
      <S.SignInFacebook>
        <FaFacebook size={25} color="blue" />
        <span>Sign in with Facebook </span>
      </S.SignInFacebook>
      <S.SignInLineBreak>
        <S.SignInMSGText>OR</S.SignInMSGText>
      </S.SignInLineBreak>
      <S.DESC>
        Enter your email address to sign in or to create an account
      </S.DESC>
      <S.FormEmail layout="vertical">
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "This field is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Continue
        </Button>
      </S.FormEmail>
    </S.ModalSignIn>
  );
}

export default SignIn;
