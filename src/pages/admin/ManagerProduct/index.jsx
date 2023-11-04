import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Table, Row, Col, Space, Popconfirm, Tooltip } from "antd";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import AddModal from "./components/addModal";
import ModalUpdate from "./components/ModalUpdate";
import {
  getProductListRequest,
  addProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "redux/slicers/product.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import { useLocation } from "react-router-dom";
import qs from "qs";
function ProductManager() {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
  });
  const [isShowAddProduct, setIsShowAddProduct] = useState(false);
  const [isShowUpdateUser, setIsShowUpdateUser] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { search } = useLocation();
  useEffect(() => {
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  }, []);
  useEffect(() => {
    const searchParams = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const newFilterParams = {
      categoryId: searchParams.categoryId
        ? searchParams.categoryId.map((id) => parseInt(id))
        : [],
      searchKey: searchParams.searchKey || "",
    };
    setFilterParams(newFilterParams);
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
        ...newFilterParams,
      })
    );
  }, [search]);
  const handleAddProduct = (values) => {
    dispatch(
      addProductRequest({
        data: {
          id: v4(),
          ...values,
        },
      })
    );
    setIsShowAddProduct(false);
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
  const handleUpdateUser = (id, values) => {
    dispatch(
      updateProductRequest({
        data: {
          id: id,
          ...values,
        },
      })
    );
    setIsShowUpdateUser(false);
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
      title: "Loại",
      dataIndex: "categoryId",
      key: "categoryId",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
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
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
    },

    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
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
            onClick={() => {
              setIsShowUpdateUser(true);
              setUpdateData(item);
            }}
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
  return (
    <Row gutter={[16, 16]} justify="space-between" align="middle">
      <Col md={20} push={1}>
        <Row gutter={[16, 16]}>
          <Col md={24}>
            <h1>Danh sách sản phẩm</h1>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <Button type="primary" onClick={() => setIsShowAddProduct(true)}>
          Thêm sản phẩm
        </Button>
      </Col>
      <Col md={24}>
        <Table
          dataSource={productList.data}
          columns={columns}
          pagination={false}
          rowKey="Id"
        />
      </Col>
      <ModalUpdate
        isShowUpdateUser={isShowUpdateUser}
        setIsShowUpdateUser={setIsShowUpdateUser}
        handleUpdateUser={handleUpdateUser}
        updateData={updateData}
      />
      <AddModal
        isShowAddProduct={isShowAddProduct}
        setIsShowAddProduct={setIsShowAddProduct}
        handleAddProduct={handleAddProduct}
      />
    </Row>
  );
}
export default ProductManager;
