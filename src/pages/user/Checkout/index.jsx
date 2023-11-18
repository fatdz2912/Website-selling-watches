import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import ChangeAddressDefaultModal from "./components/ChangeAddressModal";

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
import { FaHome, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

import { ROUTES } from "constants/routes";

import {
  getCityListRequest,
  getDistrictListRequest,
  getWardListRequest,
} from "redux/slicers/location.slice";
import { orderProductRequest } from "redux/slicers/order.slice";
import { getAddressListRequest } from "redux/slicers/address.slice";

import * as S from "./style";
import { GUEST_ID } from "constants/guest";
import { color } from "themes/color";
import { useState } from "react";

function Checkout() {
  const [isShowChangeAddress, setIsShowChangeAddress] = useState(false);

  const [checkoutForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cityList, districtList, wardList } = useSelector(
    (state) => state?.location
  );
  const { productBuyList } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state?.address);
  const totalPrice = productBuyList.reduce(
    (total, item) => total + item.currentPrice * item.quantity,
    0
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(
      getAddressListRequest({
        userId: userInfo?.data?.id,
        addressDefaultId: userInfo.data.addressDefaultId,
      })
    );
    document.title = "Thanh toán";
    dispatch(getCityListRequest());
  }, []);

  useEffect(() => {
    const defaultAddress = addressList.data.find(
      (item) => item.id === userInfo?.data?.addressDefaultId
    );
    if (defaultAddress?.districtName) {
      dispatch(getDistrictListRequest({ name: defaultAddress?.districtName }));
    }
    if (defaultAddress?.wardName) {
      dispatch(getWardListRequest({ name: defaultAddress?.wardName }));
    }
    if (defaultAddress) {
      const cityData = cityList.data.find(
        (item) => item.name === defaultAddress.cityName
      );
      const districtData = districtList.data.find(
        (item) => item.name === defaultAddress.districtName
      );
      const wardData = wardList.data.find(
        (item) => item.name === defaultAddress.wardName
      );
      if (userInfo.data.id) {
        checkoutForm.setFieldsValue({
          fullName: defaultAddress?.name,
          email: userInfo.data.email,
          phoneNumber: defaultAddress?.phone,
          specificAddress: defaultAddress?.specificAddress,
          cityCode: cityData?.code,
          districtCode: districtData?.code,
          wardCode: wardData?.code,
        });
      }
    }
  }, [userInfo.data, addressList.data]);

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
            {(item.currentPrice * item.quantity).toLocaleString()}
            <S.Unit>₫</S.Unit>,
          </div>
        </S.IntoMoney>
      ),
    },
  ];

  const handleSubmitCheckoutForm = (values) => {
    const { cityCode, districtCode, wardCode, address } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);

    const totalPrice = productBuyList.reduce(
      (total, item) => total + item.currentPrice * item.quantity,
      0
    );
    const id = v4();
    dispatch(
      orderProductRequest({
        orderData: {
          cityName: cityData?.name,
          districtName: districtData?.name,
          wardName: wardData?.name,
          totalPrice: totalPrice,
          address: address,
          note: values.note,
          userId: userInfo.data.id || GUEST_ID,
        },
        productBuyList: productBuyList,
        orderId: id,
        callback: () => navigate(ROUTES.USER.SUCCESSPAY),
      })
    );
  };

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
              {item.currentPrice.toLocaleString()}
              <S.Unit>₫</S.Unit>
            </div>
          </S.Price>
          <S.Quantity md={4} xs={4} lg={4}>
            <div>{item.quantity}</div>
          </S.Quantity>
          <S.IntoMoney md={4} xs={4} lg={4}>
            <div>
              {(item.quantity * item.currentPrice).toLocaleString()}
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
            title: (
              <Link to={ROUTES.USER.CART}>
                <Space>
                  <FaShoppingCart />
                  <span>Giỏ hàng</span>
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
        <Col lg={24} md={24} sm={24} xs={24}>
          <Form
            name="checkoutForm"
            form={checkoutForm}
            layout="vertical"
            action="/pay"
            onFinish={(values) => handleSubmitCheckoutForm(values)}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={14} xl={14}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <S.SubHeading>II.THÔNG TIN KHÁCH HÀNG</S.SubHeading>
                    {addressList?.data && (
                      <S.Address>
                        <h3>
                          <FaMapMarkerAlt color={color.outstanding} /> Địa chỉ
                          nhận hàng
                        </h3>
                        <S.ChangeDefaultAddress
                          onClick={() => setIsShowChangeAddress(true)}
                          type="primary"
                        >
                          Thay đổi
                        </S.ChangeDefaultAddress>
                        <ChangeAddressDefaultModal
                          isShowChangeAddress={isShowChangeAddress}
                          setIsShowChangeAddress={setIsShowChangeAddress}
                        />
                      </S.Address>
                    )}
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
                      label="Quận/Huyện"
                      name="districtCode"
                      rules={[{ required: true, message: "Required!" }]}
                    >
                      <Select
                        placeholder="Chọn Quận/Huyện"
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
                      label="Phường/Xã"
                      name="wardCode"
                      rules={[{ required: true, message: "Required!" }]}
                    >
                      <Select
                        placeholder="Chọn Phường/Xã"
                        disabled={!checkoutForm.getFieldValue("districtCode")}
                      >
                        {renderWardListOptions}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Địa chỉ"
                      name="specificAddress"
                      rules={[{ required: true, message: "Required!" }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
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
                </Row>
                <Row gutter={[16, 16]} justify="space-between">
                  <Button onClick={() => navigate(ROUTES.USER.CART)}>
                    Trở lại
                  </Button>
                  <S.Order type="primary" htmlType="submit">
                    Đặt Hàng
                  </S.Order>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={10} xl={10}>
                <Row>
                  <S.SubHeading>III.ĐƠN HÀNG CỦA BẠN</S.SubHeading>
                  {renderTableProductBuyList}
                  <Row gutter={[16, 16]} style={{ width: "100%" }}>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <S.SubHeading>IV.GHI CHÚ</S.SubHeading>
                      <Form.Item name="note">
                        <Input.TextArea
                          rows={5}
                          placeholder="Nhập ghi chú cho đơn hàng"
                        />
                      </Form.Item>
                      <Card
                        size="small"
                        style={{ marginTop: "2em" }}
                        title="Tổng tiền"
                      >
                        <S.TotalPrice>
                          {totalPrice.toLocaleString()}
                          <S.Unit>₫</S.Unit>,
                        </S.TotalPrice>
                      </Card>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </S.CheckoutWrapper>
  );
}

export default Checkout;
