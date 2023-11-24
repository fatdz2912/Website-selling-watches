import { useEffect } from "react";
import { Col, Row, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import * as S from "./style";

import { getOrderListRequest } from "redux/slicers/order.slice";
import { color } from "themes/color";
import { ORDER_LIMIT } from "constants/paging";

function OrderHistories() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Lịch sử mua hàng";
    if (userInfo.data.id) {
      dispatch(
        getOrderListRequest({
          userId: userInfo.data.id,
          page: 1,
          limit: ORDER_LIMIT,
        })
      );
    }
  }, [userInfo.data.id]);

  const tableColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "uuid",
      key: "uuid",
      render: (_, item) => `${item.orderDetails[0].uuid.toUpperCase()}`,
    },
    {
      title: "Số lượng sản phẩm",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} sản phẩm`,
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => dayjs(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Địa chỉ giao hàng",
      dataIndex: "specificAddress",
      key: "specificAddress",
      render: (_, item) =>
        `${item.specificAddress}, ${item?.wardName}, ${item?.districtName}, ${item?.cityName}`,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice, item) => `${totalPrice.toLocaleString()} VNĐ`,
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
      render: (_, item) => {
        switch (item.status) {
          case "processing":
            return <p style={{ color: `${color.outstanding}` }}>Đang xử lý</p>;
          case "confirm":
            return <p style={{ color: `${color.outstanding}` }}>Đang giao</p>;
          case "cancel":
            return <p style={{ color: `${color.outstanding}` }}>Đã hủy</p>;
          default:
            return <p style={{ color: `${color.outstanding}` }}>Đã giao</p>;
        }
      },
    },
  ];
  return (
    <Table
      style={{ width: "100%" }}
      scroll={{ x: 500 }}
      columns={tableColumns}
      dataSource={orderList.data}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <ul>
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
            </S.CartListDetailWrapper>
            {record.orderDetails.map((item, index) => (
              <S.CartItem key={index}>
                <Col md={12} xs={12} lg={12}>
                  <Row>
                    <S.ImageCartWrapper xs={5} md={5} lg={5}>
                      <S.ImageCart src={item?.imagePrevious}></S.ImageCart>
                    </S.ImageCartWrapper>
                    <S.Name xs={19} md={19} lg={19}>
                      <div>{item.name}</div>
                    </S.Name>
                  </Row>
                </Col>
                <S.Price md={4} xs={4} lg={4}>
                  <div>
                    {item?.currentPrice.toLocaleString()}
                    <S.Unit>₫</S.Unit>
                  </div>
                </S.Price>
                <S.Quantity md={4} xs={4} lg={4}>
                  <div>{item?.quantity}</div>
                </S.Quantity>
                <S.IntoMoney md={4} xs={4} lg={4}>
                  <div>
                    {(item?.quantity * item?.currentPrice).toLocaleString()}
                    <S.Unit>₫</S.Unit>
                  </div>
                </S.IntoMoney>
              </S.CartItem>
            ))}
          </ul>
        ),
      }}
    />
  );
}
export default OrderHistories;
