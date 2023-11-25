import { Button, DatePicker, Form, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import * as S from "./style";

import { updateUserInfoRequest } from "redux/slicers/auth.slice";

function Profile() {
  const [updateUserInfoForm] = Form.useForm();
  const { userInfo, updateUserInfoData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
    phoneNumber: userInfo.data.phoneNumber,
    birthday: dayjs(userInfo.data.birthday),
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Thông tin cá nhân";
  }, []);

  const handleUpdateUserInfo = (values) => {
    dispatch(
      updateUserInfoRequest({
        id: userInfo.data.id,
        data: {
          ...values,
          birthday: dayjs(values.birthday).valueOf(),
        },
      })
    );
  };
  return (
    <S.UserInfoWrapper>
      <S.Heading>
        <S.SubHeading>Hồ sơ của tôi</S.SubHeading>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </S.Heading>
      <S.Profile>
        <Form
          labelCol={{
            span: 8,
          }}
          form={updateUserInfoForm}
          name="updateUserInfoForm"
          initialValues={initialValues}
          onFinish={(values) => handleUpdateUserInfo(values)}
          style={{
            maxWidth: 700,
            width: "100%",
            marginTop: "15px",
          }}
        >
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
              {
                pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: "Vui lòng nhập đúng định dạng",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker placeholder="Chọn ngày" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              maxWidth: "66.6666666%",
              marginLeft: "33.333333%",
            }}
            loading={updateUserInfoData.loading}
          >
            Cập nhật
          </Button>
        </Form>
      </S.Profile>
    </S.UserInfoWrapper>
  );
}

export default Profile;
