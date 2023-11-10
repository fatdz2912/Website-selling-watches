import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Input,
  Select,
  Radio,
  Row,
  Col,
  Card,
  Space,
  Table,
  Breadcrumb,
} from "antd";
import { FaHome } from "react-icons/fa";

import { ROUTES } from "constants/routes";

import {
  getCityListRequest,
  getDistrictListRequest,
  getWardListRequest,
} from "redux/slicers/location.slice";

import * as S from "./style";

function Checkout() {
  const [checkoutForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { productBuyList } = useSelector((state) => state.buy);
  const { userInfo } = useSelector((state) => state.auth);

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
  };

  const totalPrice = productBuyList.reduce(
    (total, item) => total + item.currentPrice * 1000 * item.quantity,
    0
  );

  useEffect(() => {
    dispatch(getCityListRequest());
  }, []);

  useEffect(() => {
    if (userInfo.data.id) {
      checkoutForm.setFieldsValue(initialValues);
    }
  }, [userInfo.data]);

  const tableColumn = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div>
          {record.name} x{record.quantity}
        </div>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "intoMoney",
      key: "intoMoney",
      render: (_, item) => (
        <S.IntoMoney>
          <div>
            {(item.currentPrice * 1000 * item.quantity).toLocaleString()}
            <S.Unit>₫</S.Unit>,
          </div>
        </S.IntoMoney>
      ),
    },
  ];

  const handleSubmitCheckoutForm = (values) => {};

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);
  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);
  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

  const renderTableProductBuyList = useMemo(() => {
    return (
      <Table
        size="small"
        columns={tableColumn}
        dataSource={productBuyList}
        rowKey="id"
        pagination={false}
      />
    );
  }, [productBuyList]);
  const renderCartListDetail = useMemo(() => {
    return productBuyList.map((item) => {
      return (
        <S.CartItem>
          <Col md={12} xs={12} lg={12}>
            <Row>
              <S.ImageCartWrapper xs={5} md={5} lg={5}>
                <S.ImageCart src={item.image}></S.ImageCart>
              </S.ImageCartWrapper>
              <S.Name xs={19} md={19} lg={19}>
                <div>{item.name}</div>
              </S.Name>
            </Row>
          </Col>
          <S.Price md={4} xs={4} lg={4}>
            <div>
              {(item.currentPrice * 1000).toLocaleString()}
              <S.Unit>₫</S.Unit>
            </div>
          </S.Price>
          <S.Quantity md={4} xs={4} lg={4}>
            <div>{item.quantity}</div>
          </S.Quantity>
          <S.IntoMoney md={4} xs={4} lg={4}>
            <div>
              {(item.quantity * item.currentPrice * 1000).toLocaleString()}
              <S.Unit>₫</S.Unit>
            </div>
          </S.IntoMoney>
        </S.CartItem>
      );
    });
  }, [productBuyList]);
  return (
    <S.CheckoutWrapper>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to={ROUTES.USER.HOME}>
                <Space>
                  <FaHome />
                  <span>Trang chủ</span>
                </Space>
              </Link>
            ),
          },
          {
            title: "Thanh Toán",
          },
        ]}
      />
      <S.Heading>THANH TOÁN</S.Heading>
      <Row gutter={[16, 16]}>
        <Col md={24} xl={24} xs={24}>
          <S.SubHeading>I.CHI TIẾT ĐƠN HÀNG</S.SubHeading>
          <Row>
            <div>Bạn có mã ưu đãi?</div>
            <span>Ấn vào đây để nhập mã</span>
          </Row>
          <S.CartListDetailWrapper gutter={[16, 16]}>
            <S.Title md={12} xs={12} lg={12}>
              SẢN PHẨM
            </S.Title>
            <S.Title md={4} xs={4} lg={4}>
              GIÁ
            </S.Title>
            <S.Title md={4} xs={4} lg={4}>
              SỐ LƯỢNG
            </S.Title>
            <S.Title md={4} xs={4} lg={4}>
              THÀNH TIỀN
            </S.Title>
            {renderCartListDetail}
          </S.CartListDetailWrapper>
        </Col>
        <Col lg={14} md={14} sm={24} xs={24}>
          <Form
            name="checkoutForm"
            form={checkoutForm}
            layout="vertical"
            initialValues={initialValues}
            action="/pay"
            // onFinish={(values) => handleSubmitCheckoutForm(values)}
          >
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <S.SubHeading>II.THÔNG TIN KHÁCH HÀNG</S.SubHeading>
                <Form.Item
                  label="Họ và tên"
                  name="fullName"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input placeholder="Nhập gmail của bạn" />
                </Form.Item>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  label="Tỉnh/Thành"
                  name="cityCode"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    placeholder="Chọn Tỉnh/Thành"
                    onChange={(value) => {
                      dispatch(getDistrictListRequest({ cityCode: value }));
                      checkoutForm.setFieldsValue({
                        districtCode: undefined,
                        wardCode: undefined,
                      });
                    }}
                  >
                    {renderCityOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  placeholder="Chọn Quận/Huyện"
                  label="Quận/Huyện"
                  name="districtCode"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    onChange={(value) => {
                      dispatch(getWardListRequest({ districtCode: value }));
                      checkoutForm.setFieldsValue({
                        wardCode: undefined,
                      });
                    }}
                    disabled={!checkoutForm.getFieldValue("cityCode")}
                  >
                    {renderDistrictOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Form.Item
                  placeholder="Chọn Phường/Xã"
                  label="Phường/Xã"
                  name="wardCode"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Select
                    disabled={!checkoutForm.getFieldValue("districtCode")}
                  >
                    {renderWardListOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  label="Phương thức thanh toán"
                  name="paymentMethod"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value="pod">Thanh toán khi nhận hàng</Radio>
                      <Radio value="atm">ATM</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]} justify="space-between">
              <Button onClick={() => navigate(ROUTES.USER.CART)}>
                Trở lại
              </Button>
              <Button type="primary" htmlType="submit">
                Thanh toán
              </Button>
            </Row>
          </Form>
        </Col>
        <Col lg={10} md={10} sm={24} xs={24}>
          <S.SubHeading>III.ĐƠN HÀNG CỦA BẠN</S.SubHeading>
          {renderTableProductBuyList}
          <Card size="small" style={{ marginTop: "2em" }} title="Tổng tiền">
            <S.TotalPrice>
              {totalPrice.toLocaleString()}
              <S.Unit>₫</S.Unit>,
            </S.TotalPrice>
          </Card>
        </Col>
      </Row>
    </S.CheckoutWrapper>
  );
}

export default Checkout;
