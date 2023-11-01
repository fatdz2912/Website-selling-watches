import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Select, Button, Segmented, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Link, generatePath, useNavigate, useLocation } from "react-router-dom";
import qs from "qs";

import { getProductListRequest } from "redux/slicers/product.slice";
import { getCategoryListRequest } from "redux/slicers/category.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import * as S from "./style";
import { formatNumberWithCommaAndDecimal } from "../../../components/fomatNumber";
import { ROUTES } from "constants/routes";
function ProductList() {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    sortOrder: undefined,
    discountOrder: undefined,
  });
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  useEffect(() => {
    document.title = "ProductList Page";
    dispatch(getCategoryListRequest());
  }, []);
  useEffect(() => {
    const searchParams = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const newFilterParams = {
      categoryId: searchParams.categoryId
        ? searchParams.categoryId.map((id) => parseInt(id))
        : [],
      sortOrder: searchParams.sortOrder,
      searchKey: searchParams.searchKey || "",
      discountOrder: searchParams.discountOrder,
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
  const handleFilter = (key, values) => {
    const newFilterParams = {
      ...filterParams,
      [key]: values,
    };
    setFilterParams(newFilterParams);
    navigate({
      pathname: ROUTES.USER.PRODUCT_LIST,
      search: qs.stringify(newFilterParams),
    });
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
        ...newFilterParams,
      })
    );
  };
  const handleShowMore = () => {
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: productList.meta.page + 1,
        limit: PRODUCT_LIMIT,
        more: true,
      })
    );
  };
  const renderCategoryList = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <S.BrandItem key={item.id} span={24}>
          <S.CheckBoxFilter value={item.id}>{item.name}</S.CheckBoxFilter>
        </S.BrandItem>
      );
    });
  }, [categoryList.data]);
  const renderProductList = productList.data.map((item, index) => (
    <S.ProductItem xs={12} md={12} lg={6} key={index}>
      <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
        <S.ImageWrapper>
          <S.Image src={item.image} alt={item.name}></S.Image>
        </S.ImageWrapper>
        <S.Information>
          <S.Name>
            <S.Brands>{item.category.name.toUpperCase()}</S.Brands>
            {item.name}
          </S.Name>
          <S.Price>
            <S.OldPrice discount={item.discount}>
              ${formatNumberWithCommaAndDecimal(parseInt(item.price))}.00
            </S.OldPrice>
            <S.Discount discount={item.discount}>
              Giảm {item.discount}%
            </S.Discount>
          </S.Price>
        </S.Information>
      </Link>
    </S.ProductItem>
  ));

  return (
    <S.ProductListWrapper>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col lg={3} md={6} xs={24}>
          <Card title="Filter" size="small" bordered={false}>
            {categoryList.loading ? (
              <Skeleton active />
            ) : (
              <S.CheckBoxFilter.Group
                onChange={(values) => handleFilter("categoryId", values)}
                value={filterParams.categoryId}
              >
                <S.BrandList>{renderCategoryList}</S.BrandList>
              </S.CheckBoxFilter.Group>
            )}
          </Card>
        </Col>
        <Col lg={21} md={18} xs={24}>
          <Card size="small" bordered={false}>
            <Row gutter={[16, 16]}>
              <Col md={16} xs={24}></Col>
              <Col md={8} xs={24} style={{ textAlign: "right" }}>
                <S.SelectArrange
                  placeholder="Sắp xếp theo"
                  bordered={false}
                  allowClear
                  onChange={(value) => handleFilter("sortOrder", value)}
                  value={filterParams.sortOrder}
                >
                  <Select.Option value="asc">Giá tăng dần</Select.Option>
                  <Select.Option value="desc">Giá giảm dần</Select.Option>
                </S.SelectArrange>
                <Segmented
                  options={[
                    {
                      value: "card",
                      icon: <AppstoreOutlined />,
                    },
                    {
                      value: "list",
                      icon: <BarsOutlined />,
                    },
                  ]}
                />
              </Col>
            </Row>
          </Card>
          {productList.loading ? (
            <Skeleton active />
          ) : (
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              {renderProductList}
            </Row>
          )}
          {productList.data.length !== productList.meta.total && (
            <Row justify="center" style={{ marginTop: 16 }}>
              <Button onClick={() => handleShowMore()}>Hiển thị thêm</Button>
            </Row>
          )}
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}

export default ProductList;
