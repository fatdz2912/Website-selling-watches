import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Space,
  Upload,
  notification,
} from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import ReactQuill from "react-quill";
import { v4 as uuid } from "uuid";

import { addProductRequest } from "redux/slicers/product.slice";
import { getCategoryListRequest } from "redux/slicers/category.slice";

import * as S from "./style";
import { ROUTES } from "constants/routes";

function CreateProduct() {
  const { categoryList } = useSelector((state) => state.category);
  const { addProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, []);

  const handleAddProduct = (values) => {
    dispatch(
      addProductRequest({
        data: {
          id: uuid(),
          ...values,
          currentPrice:
            values.oldPrice - (values.oldPrice * values.discount) / 100,
        },
        callback: () => navigate(ROUTES.ADMIN.PRODUCT_MANAGER),
      })
    );
    notification.success({ message: "Thêm sản phẩm thành công" });
  };

  const renderProductOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Heading>THÊM SẢN PHẨM</S.Heading>
        <S.BTSubmit
          loading={addProductData.loading}
          type="primary"
          onClick={() => createForm.submit()}
        >
          Thêm
        </S.BTSubmit>
      </S.TopWrapper>
      <S.CreateForm
        form={createForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
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
          name="oldPrice"
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
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Dự Trữ Điện"
          name="powerReserve"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Dự Trữ Điện!",
              type: "number",
            },
            {
              type: "number",
              min: 1,
              message: "vui lòng nhập từ 1 trở lên!",
            },
          ]}
        >
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Kích Thước"
          name="size"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập kích thước!",
              type: "number",
            },
            {
              type: "number",
              min: 1,
              message: "vui lòng nhập từ 1 trở lên!",
            },
          ]}
        >
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Độ dày"
          name="thickness"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập độ dày!",
              type: "number",
            },
            {
              type: "number",
              min: 1,
              message: "vui lòng nhập từ 1 trở lên!",
            },
          ]}
        >
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
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
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Series"
          name="series"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Series!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vật liệu"
          name="material"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Vật liệu!",
            },
          ]}
        >
          <Input />
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
          label="Hình dạng"
          name="shape"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Hình dạng!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mặt sau"
          name="back"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mặt sau!",
            },
          ]}
        >
          <Input />
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
          <Select placeholder="Chọn loại SP">{renderProductOptions}</Select>
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
      </S.CreateForm>
    </S.Wrapper>
  );
}

export default CreateProduct;
