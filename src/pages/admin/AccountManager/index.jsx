import { useEffect } from "react";
import { Button, Input, Pagination, Popconfirm, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import * as S from "./style";

import {
  getUserListRequest,
  lockAccountRequest,
  openAccountRequest,
} from "redux/slicers/auth.slice";
import { color } from "themes/color";
import { PRODUCT_TABLE_LIMIT } from "constants/paging";

function AccountManager() {
  const { userList } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Quản lý đơn hàng";
    dispatch(getUserListRequest({ page: 1, limit: PRODUCT_TABLE_LIMIT }));
  }, []);

  const tableColumns = [
    {
      title: "Mã KH",
      dataIndex: "id",
      key: "id",
      render: (_, item) => `${item.id}`,
    },
    {
      title: "Tên KH",
      dataIndex: "fullName",
      key: "fullName",
      render: (fullName) => `${fullName}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => `${email}`,
    },
    {
      title: "Ngày lập TK",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => dayjs(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Space size={16}>
          {item.isDelete === true ? (
            <Button
              type="primary"
              onClick={() => dispatch(openAccountRequest({ id: item.id }))}
            >
              Mở khóa
            </Button>
          ) : (
            <Popconfirm
              description="Bạn chắn chắn muốn Khóa?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => dispatch(lockAccountRequest({ id: item.id }))}
            >
              <Button
                style={{
                  backgroundColor: `${color.outstanding}`,
                  color: `${color.primaryText}`,
                }}
              >
                Khóa tài khoản
              </Button>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];
  const handleChangePage = (page) => {
    dispatch(
      getUserListRequest({
        page: page,
        limit: PRODUCT_TABLE_LIMIT,
      })
    );
  };
  return (
    <S.AccountManager>
      <S.Heading>QUẢN LÝ TÀI KHOẢN</S.Heading>
      <S.FilterWrapper>
        <Input
          onChange={(e) =>
            dispatch(getUserListRequest({ searchKey: e.target.value }))
          }
          placeholder="Tìm kiếm tài khoản"
        />
      </S.FilterWrapper>
      <Table
        scroll={{ x: 1200 }}
        columns={tableColumns}
        dataSource={userList.data}
        rowKey="id"
        pagination={false}
      />
      <Pagination
        current={userList.meta.page}
        pageSize={PRODUCT_TABLE_LIMIT}
        total={userList.meta.total}
        onChange={(page) => handleChangePage(page)}
        style={{ margin: "16px auto 0 " }}
      />
    </S.AccountManager>
  );
}
export default AccountManager;
