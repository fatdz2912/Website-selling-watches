import { Form, Input, Button, Row, Col, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

import { loginRequest } from "redux/slicers/auth.slice";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Login() {
  const [loginForm] = Form.useForm();

  const { loginData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error]);
  const handleSubmit = (values) => {
    dispatch(
      loginRequest({
        data: values,
        callback: () => navigate(ROUTES.USER.HOME),
      })
    );
  };
  return (
    <S.LoginWrapper>
      <Col md={24}>
        <Row gutter={[16, 16]} justify={"center"}>
          <S.ContentLogin xs={20} md={10} lg={9}>
            <Form
              form={loginForm}
              name="basic"
              initialValues={{
                remember: true,
              }}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{
                maxWidth: 600,
              }}
              size="large"
              onFinish={(values) => handleSubmit(values)}
            >
              <Form.Item
                label="Gmail"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền gmail",
                  },
                  {
                    type: "email",
                    message: "Vui lòng điền đúng định dạng email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật Khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền mật khẩu",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 16,
                  span: 8,
                }}
              >
                <a>Quên mật khẩu</a>
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button type="primary" htmlType="submit" block>
                  Đăng nhập
                </Button>
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Link to={ROUTES.REGISTER}>
                  <Button block>Đăng ký</Button>
                </Link>
              </Form.Item>
            </Form>
          </S.ContentLogin>
        </Row>
      </Col>
    </S.LoginWrapper>
  );
}

export default Login;
