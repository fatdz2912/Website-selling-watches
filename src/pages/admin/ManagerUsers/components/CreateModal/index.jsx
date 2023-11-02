import { useEffect } from "react";
import { Modal, Form, Input, Button, InputNumber, Select } from "antd";
function CreateModal({
  isShowCreateUser,
  setIsShowCreateUser,
  handleCreateUser,
}) {
  const [createForm] = Form.useForm();
  useEffect(() => {
    if (isShowCreateUser) {
      createForm.resetFields();
    }
  }, [isShowCreateUser]);
  return (
    <Modal
      title="Create User"
      footer={null}
      open={isShowCreateUser}
      onCancel={() => setIsShowCreateUser(false)}
    >
      <Form
        form={createForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{
          maxWidth: 900,
        }}
        size="large"
        onFinish={handleCreateUser}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
            {
              max: 25,
              min: 6,
              message: "Please enter 6-25 characters",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age",
              type: "number",
            },
            {
              type: "number",
              max: 100,
              min: 1,
              message: "Please enter a number from 1-100",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please Choose a gender",
            },
          ]}
        >
          <Select
            placeholder="Choose a gender"
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Gmail"
          name="gmail"
          rules={[
            {
              required: true,
              message: "Please input your Email",
            },
            {
              type: "email",
              message: "Please enter the correct gmail format ",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address",
            },
            {
              min: 6,
              message: "Please enter at least 6 characters",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Create
        </Button>
      </Form>
    </Modal>
  );
}

export default CreateModal;
