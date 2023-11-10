import {
  Table,
  Button,
  InputNumber,
  Row,
  Col,
  Card,
  Space,
  Breadcrumb,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { ROUTES } from "constants/routes";
import { deleteCart, updateCart } from "redux/slicers/cart.slice";
import { updateProductBuy } from "redux/slicers/buy.slice";

import * as S from "./style";
import { useEffect, useState } from "react";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

  const { cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cart Page";
  }, []);

  const handleChangeQuantity = (productId, value) => {
    dispatch(
      updateCart({
        productId: productId,
        quantity: value,
      })
    );
  };

  const handleDeleteCartItem = (productId) => {
    dispatch(deleteCart({ productId: productId }));
  };

  const tableColumn = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          src={record.image}
          alt={record.name}
          style={{ width: "60px", height: "50px" }}
        />
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "currentPrice",
      key: "currentPrice",
      render: (_, item) => (
        <S.CurrentPrice discount={item.discount}>
          {(item.currentPrice * 1000).toLocaleString()} <S.Unit>₫</S.Unit>
        </S.CurrentPrice>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, item) => (
        <InputNumber
          value={item.quantity}
          min={1}
          onChange={(value) => handleChangeQuantity(item.productId, value)}
        />
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      render: (_, item) => (
        <S.TotalPrice discount={item.discount}>
          {(item.currentPrice * 1000 * item.quantity).toLocaleString()}{" "}
          <S.Unit>₫</S.Unit>
        </S.TotalPrice>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Button onClick={() => handleDeleteCartItem(item.productId)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <S.CartListWrapper>
      <S.HeadingCart>
        <h1>GIỎ HÀNG CỦA BẠN ({cartList.length})</h1>
      </S.HeadingCart>
      <S.CartList>
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
              title: "Giỏ hàng",
            },
          ]}
        />
        <S.CartTable
          scroll={{ x: 500 }}
          columns={tableColumn}
          dataSource={cartList}
          rowKey="productId"
          rowSelectedBg="red"
          pagination={false}
          rowSelection={{
            type: "checkbox",
            onChange: (_, selectedRows) => {
              setSelectedRows(selectedRows);
              setTotalPrice(
                selectedRows.reduce(
                  (total, item) =>
                    total + item.currentPrice * 1000 * item.quantity,
                  0
                )
              );
            },
          }}
        />
        <Row justify="end" style={{ margin: "24px 0" }}>
          <Col span={8}>
            <Card size="small" title="Tổng tiền phải thanh toán">
              <S.TotalPrice>
                {(totalPrice * 1000).toLocaleString()} <S.Unit>₫</S.Unit>
              </S.TotalPrice>
            </Card>
          </Col>
        </Row>
        <Row justify="end">
          <S.Pay
            type="primary"
            disabled={selectedRows.length === 0}
            onClick={() => {
              dispatch(updateProductBuy({ selectedRows }));
              navigate(ROUTES.USER.CHECKOUT);
            }}
          >
            Tiến Hành Thanh Toán
          </S.Pay>
        </Row>
      </S.CartList>
    </S.CartListWrapper>
  );
}

export default CartPage;
