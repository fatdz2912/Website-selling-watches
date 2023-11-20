import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Table,
  Row,
  Col,
  Space,
  Popconfirm,
  Tooltip,
  Input,
  Select,
  Pagination,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, generatePath, useNavigate } from "react-router-dom";

import * as S from "./style";
import {
  getProductListRequest,
  deleteProductRequest,
} from "redux/slicers/product.slice";
import { PRODUCT_TABLE_LIMIT } from "constants/paging";
import { ROUTES } from "constants/routes";
import { useMemo } from "react";
function ProductManager() {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    sortOrder: undefined,
    discountOrder: undefined,
    gender: undefined,
  });
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Product Manager";
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_TABLE_LIMIT,
      })
    );
  }, []);
  const handleFilter = (key, values) => {
    const newFilterParams = {
      ...filterParams,
      [key]: values,
    };
    setFilterParams(newFilterParams);
    navigate({
      pathname: ROUTES.ADMIN.PRODUCT_MANAGER,
    });
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_TABLE_LIMIT,
        ...newFilterParams,
      })
    );
  };
  const handleChangePage = (page) => {
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: page,
        limit: PRODUCT_TABLE_LIMIT,
      })
    );
  };
  const handleDeleteUser = (id) => {
    dispatch(
      deleteProductRequest({
        data: {
          id,
        },
      })
    );
  };
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              width: "100px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: "Thương hiệu",
      dataIndex: "category",
      key: "category",
      render: (category) => category?.name,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      render: (discount) => (
        <p style={{ textAlign: "center" }}>{discount.toLocaleString()}%</p>
      ),
    },

    {
      title: "Giá",
      dataIndex: "oldPrice",
      key: "oldPrice",
      render: (oldPrice) => <p>{oldPrice.toLocaleString()}VNĐ</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              width: "100px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Space size={16}>
          <Button
            onClick={() =>
              navigate(
                generatePath(ROUTES.ADMIN.UPDATE_PRODUCT, { id: item.id })
              )
            }
          >
            Update
          </Button>
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteUser(item.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const renderProductOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item?.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);
  return (
    <S.ProductManagerWrapper>
      <S.ProductManager
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
      >
        <Col md={20}>
          <Row gutter={[16, 16]}>
            <Col md={24}>
              <S.Heading>QUẢN LÝ SẢN PHẨM</S.Heading>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Link to={ROUTES.ADMIN.CREATE_PRODUCT}>
            <S.BTSubmit type="primary">Thêm sản phẩm</S.BTSubmit>
          </Link>
        </Col>
        <Col md={24}>
          <S.FilterWrapper>
            <h2>Bộ lọc</h2>
            <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
              <Col span={12}>
                <Input
                  onChange={(e) => handleFilter("searchKey", e.target.value)}
                  placeholder="Tên sản phẩm"
                />
              </Col>
              <Col span={8}>
                <Select
                  mode="multiple"
                  allowClear
                  onChange={(values) => handleFilter("categoryId", values)}
                  placeholder="Thương hiệu"
                  style={{ width: "100%" }}
                >
                  {renderProductOptions}
                </Select>
              </Col>
              <Col span={4}>
                <Select
                  placeholder="Sắp xếp theo"
                  onChange={(value) => handleFilter("sortOrder", value)}
                  allowClear
                >
                  <Select.Option value="oldPrice.desc">
                    Giá giảm dần
                  </Select.Option>
                  <Select.Option value="oldPrice.asc">
                    Giá tăng dần
                  </Select.Option>
                  <Select.Option value="createdAt.desc">Mới nhất</Select.Option>
                  <Select.Option value="createdAt.asc">Cũ nhất</Select.Option>
                  <Select.Option value="updatedAt.desc">
                    Cập nhật mới nhất
                  </Select.Option>
                  <Select.Option value="updatedAt.asc">
                    Cập nhật cũ nhất
                  </Select.Option>
                </Select>
              </Col>
            </Row>
          </S.FilterWrapper>
          <Table
            dataSource={productList.data}
            columns={columns}
            pagination={false}
            rowKey="name"
          />
          <Row>
            <Pagination
              current={productList.meta.page}
              pageSize={PRODUCT_TABLE_LIMIT}
              total={productList.meta.total}
              onChange={(page) => handleChangePage(page)}
              style={{ margin: "16px auto 0" }}
            />
          </Row>
        </Col>
      </S.ProductManager>
    </S.ProductManagerWrapper>
  );
}
export default ProductManager;
