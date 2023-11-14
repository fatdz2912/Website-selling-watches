import { Button, Form, Input } from "antd";
import * as S from "./style";
import { FaKey, FaLock } from "react-icons/fa";
import { color } from "themes/color";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changePasswordRequest } from "redux/slicers/auth.slice";
import { render } from "@testing-library/react";
function ChangsPassword() {
  const { changePassword, userInfo } = useSelector((state) => state.auth);

  const [changePasswordForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (changePassword.error) {
      changePasswordForm.setFields([
        {
          name: "password",
          errors: [changePassword.error],
        },
      ]);
    }
  }, [changePassword.error]);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordRequest({
        data: {
          email: userInfo.data.email,
          ...values,
        },
        reset: () => changePasswordForm.resetFields(),
      })
    );
  };
  return (
    <S.ChangePasswordWrapper>
      <S.Heading>
        <S.SubHeading>Thay đổi mật khẩu</S.SubHeading>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </S.Heading>
      <S.ContentChangepassword gutter={[16, 16]}>
        <S.FormChangePassword
          form={changePasswordForm}
          onFinish={(values) => handleChangePassword(values)}
          size="large"
        >
          <S.Key>
            <FaKey size={25} />
          </S.Key>
          <S.FormHeading>Đổi mật khẩu</S.FormHeading>
          <S.FormSubHeading>Phải điền ít nhất 8 kí tự</S.FormSubHeading>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu cũ!",
              },
            ]}
          >
            <Input.Password
              prefix={<FaLock color={color.primary} />}
              placeholder="Mật khẩu cũ"
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu mới!",
              },
              {
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/g,
                message: "Mật khẩu yếu",
              },
            ]}
          >
            <Input.Password
              prefix={<FaLock color={color.primary} />}
              placeholder="Mật khẩu mới"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Mật khẩu mới"
              prefix={<FaLock color={color.primary} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Thay đổi
            </Button>
          </Form.Item>
        </S.FormChangePassword>
      </S.ContentChangepassword>
    </S.ChangePasswordWrapper>
  );
}

export default ChangsPassword;
