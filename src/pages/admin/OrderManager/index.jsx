import { useEffect } from "react";
import {
  Button,
  Col,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Space,
  Table,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import * as S from "./style";

import {
  getOrderListRequest,
  updateOrderRequest,
  cancelOrderRequest,
  completeOrderRequest,
} from "redux/slicers/order.slice";
import { color } from "themes/color";
import { ORDER_LIMIT } from "constants/paging";

function OrderManager() {
  const { orderList } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Quản lý đơn hàng";
    dispatch(getOrderListRequest({ page: 1, limit: ORDER_LIMIT }));
  }, []);

  const tableColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "uuid",
      key: "uuid",
      render: (_, item) => `${item.orderDetails[0].uuid.toUpperCase()}`,
    },
    {
      title: "Tên KH",
      dataIndex: "fullName",
      key: "fullName",
      render: (_, item) => `${item.user.fullName}`,
    },
    {
      title: "SDT",
      dataIndex: "phone",
      key: "phone",
      render: (_, item) => `${item.user.phoneNumber}`,
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
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      render: (_, item) => `${item.note ? item.note : "Không"}`,
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Space size={16}>
          {item.status === "processing" ? (
            <Button
              type="primary"
              onClick={() => dispatch(updateOrderRequest({ id: item.id }))}
            >
              Xác nhận
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(completeOrderRequest({ id: item.id }))}
            >
              Hoàn tất
            </Button>
          )}
          {item.status === "processing" && (
            <Popconfirm
              description="Bạn chắn chắn muốn hủy?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => dispatch(cancelOrderRequest({ id: item.id }))}
            >
              <Button
                style={{
                  backgroundColor: `${color.outstanding}`,
                  color: `${color.primaryText}`,
                }}
              >
                Hủy
              </Button>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];
  const handleChangePage = (page) => {
    dispatch(
      getOrderListRequest({
        page: page,
        limit: ORDER_LIMIT,
      })
    );
  };
  return (
    <S.OrderManager>
      <Col md={24}>
        <S.Heading>QUẢN LÝ ĐƠN HÀNG</S.Heading>
      </Col>
      <S.FilterWrapper>
        <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
          <Col span={24}>
            <Input
              onChange={(e) =>
                dispatch(getOrderListRequest({ searchKey: e.target.value }))
              }
              placeholder="Tìm kiếm đơn hàng"
            />
          </Col>
        </Row>
      </S.FilterWrapper>
      <Table
        scroll={{ x: 1000 }}
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
      <Pagination
        current={orderList.meta.page}
        pageSize={ORDER_LIMIT}
        total={orderList.meta.total}
        onChange={(page) => handleChangePage(page)}
        style={{ margin: "16px auto 0" }}
      />
    </S.OrderManager>
  );
}
export default OrderManager;
