import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, InputNumber, notification, Upload } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import ReactQuill from "react-quill";
import { v4 as uuid } from "uuid";

import { addProductRequest } from "redux/slicers/product.slice";
import { getCategoryListRequest } from "redux/slicers/category.slice";

import * as S from "./style";
import { ROUTES } from "constants/routes";
import { FaCamera } from "react-icons/fa";
import { convertImageToBase64 } from "utils/files";

function CreateProduct() {
  const { categoryList } = useSelector((state) => state.category);
  const { addProductData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, []);

  const handleAddProduct = async (values) => {
    const { imageHozontal, imagePrevious, imageBehind } = values;
    const imageHozontalBase64 = await convertImageToBase64(
      imageHozontal[0].originFileObj
    );
    const imagePreviousBase64 = await convertImageToBase64(
      imagePrevious[0].originFileObj
    );
    const imageBehindBase64 = await convertImageToBase64(
      imageBehind[0].originFileObj
    );
    await dispatch(
      addProductRequest({
        data: {
          id: uuid(),
          ...values,
          currentPrice:
            values.oldPrice - (values.oldPrice * values.discount) / 100,
          imageHozontal: imageHozontalBase64,
          imagePrevious: imagePreviousBase64,
          imageBehind: imageBehindBase64,
        },
        callback: () => navigate(ROUTES.ADMIN.PRODUCT_MANAGER),
      })
    );
    await notification.success({ message: "Thêm sản phẩm thành công" });
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
          label="Ảnh trước"
          name="imagePrevious"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            return e?.fileList;
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng thêm ảnh trước của đồng hồ!",
            },
          ]}
        >
          <Upload
            listType="picture-card"
            beforeUpload={Upload.LIST_IGNORE}
            maxCount={1}
          >
            <div>
              <FaCamera />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Ảnh ngang"
          name="imageHozontal"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            return e?.fileList;
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng thêm ảnh ngang của đồng hồ!",
            },
          ]}
        >
          <Upload
            listType="picture-card"
            beforeUpload={Upload.LIST_IGNORE}
            maxCount={1}
          >
            <div>
              <FaCamera />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Ảnh đằng sau"
          name="imageBehind"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            return e?.fileList;
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng thêm ảnh sau của đồng hồ!",
            },
          ]}
        >
          <Upload
            listType="picture-card"
            beforeUpload={Upload.LIST_IGNORE}
            maxCount={1}
          >
            <div>
              <FaCamera />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
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
