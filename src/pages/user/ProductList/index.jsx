import { useEffect, useMemo } from "react";
import { Card, Row, Col, Select, Button, Segmented, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";

import { getProductListRequest } from "../../../redux/slicers/product.slice";
import { getCategoryListRequest } from "../../../redux/slicers/category.slice";
import { PRODUCT_LIMIT } from "../../../constants/paging";
import * as S from "./style";
import { formatNumberWithCommaAndDecimal } from "../../../components/fomatNumber";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useState } from "react";
function ProductList() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getCategoryListRequest());
  }, []);

  const handleFilterCategory = (values) => {
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
        categoryId: values,
      })
    );
  };
  const handleShowMore = () => {
    dispatch(
      getProductListRequest({
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
  const renderProductList = useMemo(() => {
    return productList.data.map((item, index) => {
      return (
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
                <S.NewPrice>
                  $
                  {formatNumberWithCommaAndDecimal(
                    item.discount !== ""
                      ? parseInt(item.price) -
                          (parseInt(item.price) * parseInt(item.discount)) / 100
                      : parseInt(item.price)
                  )}
                  .00
                </S.NewPrice>
                <S.Discount discount={item.discount}>
                  Giảm {item.discount}%
                </S.Discount>
              </S.Price>
            </S.Information>
          </Link>
        </S.ProductItem>
      );
    });
  }, [productList.data]);
  return (
    <S.ProductListWrapper>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col lg={3} md={6} xs={24}>
          <Card title="Filter" size="small" bordered={false}>
            {categoryList.loading ? (
              <Skeleton active />
            ) : (
              <S.CheckBoxFilter.Group
                onChange={(values) => handleFilterCategory(values)}
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
                <S.SelectArrange placeholder="Sắp xếp theo" bordered={false}>
                  <Select.Option value="price.asc">Giá tăng dần</Select.Option>
                  <Select.Option value="price.desc">Giá giảm dần</Select.Option>
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
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            {renderProductList}
          </Row>
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
