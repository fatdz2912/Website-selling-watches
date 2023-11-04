import { useEffect } from "react";
import { Modal, Form, Input, Button, InputNumber, Select } from "antd";
function AddModal({ isShowAddProduct, setIsShowAddProduct, handleAddProduct }) {
  const [addForm] = Form.useForm();
  useEffect(() => {
    if (isShowAddProduct) {
      addForm.resetFields();
    }
  }, [isShowAddProduct]);
  return (
    <Modal
      title="Thêm sản phẩm"
      footer={null}
      open={isShowAddProduct}
      onCancel={() => setIsShowAddProduct(false)}
    >
      <Form
        form={addForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{
          maxWidth: 900,
        }}
        size="large"
        onFinish={handleAddProduct}
      >
        <Form.Item
          label="Tên SP"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên sản phẩm!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá"
          name="price"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập giá!",
              type: "number",
            },
            {
              type: "number",
              min: 1,
              message: "vui lòng nhập từ 1 trở lên!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Giảm giá"
          name="discount"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập giảm giá!",
              type: "number",
            },
            {
              type: "number",
              min: 0,
              message: "vui lòng nhập từ 0 trở lên!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Giới Tính"
          name="gender"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn giới tính",
            },
          ]}
        >
          <Select
            placeholder="Chọn giới tính"
            options={[
              {
                value: "Nam",
                label: "Nam",
              },
              {
                value: "Nữ",
                label: "Nữ",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Loại"
          name="categoryId"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn loại!",
            },
          ]}
        >
          <Select
            placeholder="Chọn loại SP"
            options={[
              {
                value: 1,
                label: "Omega",
              },
              {
                value: 2,
                label: "Rolex",
              },
              {
                value: 3,
                label: "Tissot",
              },
              {
                value: 4,
                label: "Breitling",
              },
              {
                value: 5,
                label: "Tudor",
              },
              {
                value: 6,
                label: "Longines",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Ảnh"
          name="image"
          rules={[
            {
              required: true,
              message: "Vui lòng thêm ảnh!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[
            {
              required: true,
              message: "Vui lòng điền mô tả!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Thêm
        </Button>
      </Form>
    </Modal>
  );
}

export default AddModal;
