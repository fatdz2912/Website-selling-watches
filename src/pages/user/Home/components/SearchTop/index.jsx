import { Carousel, Skeleton, Space } from "antd";
import { useMemo } from "react";
import * as S from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductListRequest } from "redux/slicers/product.slice";
import { PRODUCT_DISCOUNT } from "constants/paging";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "constants/routes";

function SearchTop() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { data, loading } = productList;

  useEffect(() => {
    dispatch(
      getProductListRequest({
        limit: PRODUCT_DISCOUNT,
      })
    );
  }, []);
  const groupSearchTop = [];
  for (let i = 0; i < data.length; i += 4) {
    groupSearchTop.push(data.slice(i, i + 4));
  }
  const renderSearchTop = useMemo(() => {
    if (loading) {
      return (
        <S.SearchTopList gutter={[16, 16]}>
          {[...Array(4)].map((_, index) => (
            <S.SearchTopsItem key={index} md={6} sm={12} xs={12}>
              <Skeleton.Image style={{ width: "120px" }} active />
              <br />
              <br />
              <Skeleton.Button active />
              <br />
              <br />
              <Skeleton.Input block active />
              <br />
              <Skeleton.Input block active />
              <br />
              <Space>
                <Skeleton.Button active />
                <Skeleton.Button active />
              </Space>
            </S.SearchTopsItem>
          ))}
        </S.SearchTopList>
      );
    } else {
      return groupSearchTop.map((group, index) => {
        return (
          <S.SearchTopList
            key={index}
            gutter={[20, 20]}
            justify={"space-between"}
          >
            {group.map((item, index) => {
              return (
                <S.SearchTopsItem xs={12} sm={12} md={6} key={index}>
                  <Link
                    to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                      id: item.id,
                    })}
                  >
                    <S.Discount>
                      <p>-{item.discount}%</p>
                    </S.Discount>
                    <S.FullBox>
                      <p>MỚI - FULLBOX 100%</p>
                    </S.FullBox>
                    <S.ImageWrapper>
                      <S.Image src={item.image} alt={item.name}></S.Image>
                    </S.ImageWrapper>
                    <S.Information>
                      <S.Name>
                        <S.Brands>{item.category.name.toUpperCase()}</S.Brands>
                        {item.name}
                      </S.Name>
                      <S.Price>
                        <S.PriceRate value={5}></S.PriceRate>
                        <S.OldPrice discount={item.discount}>
                          {item.oldPrice.toLocaleString()} <S.Unit>₫</S.Unit>
                        </S.OldPrice>
                        <S.CurrentPrice discount={item.discount}>
                          {item.currentPrice.toLocaleString()}{" "}
                          <S.Unit>₫</S.Unit>
                        </S.CurrentPrice>
                      </S.Price>
                    </S.Information>
                  </Link>
                </S.SearchTopsItem>
              );
            })}
          </S.SearchTopList>
        );
      });
    }
  }, [data, loading]);
  return (
    <S.SearchTopWrapper>
      <S.HeadingSearchTop>
        <h1>TÌM KIẾM HÀNG ĐẦU</h1>
      </S.HeadingSearchTop>
      <Carousel
        style={{ width: "100% " }}
        autoplay
        dots
        dotPosition={"top"}
        autoplaySpeed={1500}
      >
        {renderSearchTop}
      </Carousel>
    </S.SearchTopWrapper>
  );
}

export default SearchTop;
