import { Carousel } from "antd";
import { useMemo } from "react";
import * as S from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductListRequest } from "redux/slicers/product.slice";
import { PRODUCT_DISCOUNT } from "constants/paging";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "constants/routes";

function TrendingNow() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { data } = productList;

  useEffect(() => {
    dispatch(
      getProductListRequest({
        limit: PRODUCT_DISCOUNT,
      })
    );
  }, []);
  const groupTrendingNow = [];
  for (let i = 0; i < data.length; i += 4) {
    groupTrendingNow.push(data.slice(i, i + 4));
  }
  const renderTrendingNow = useMemo(() => {
    return groupTrendingNow.map((group, index) => {
      return (
        <S.TrendingNowList
          key={index}
          gutter={[20, 20]}
          justify={"space-between"}
        >
          {group.map((item, index) => {
            return (
              <S.TrendingNowsItem xs={12} sm={12} md={6} key={index}>
                <Link
                  to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}
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
                        {(item.currentPrice * 1000).toLocaleString()}{" "}
                        <S.Unit>₫</S.Unit>
                      </S.OldPrice>
                      <S.CurrentPrice discount={item.discount}>
                        {(item.currentPrice * 1000).toLocaleString()}{" "}
                        <S.Unit>₫</S.Unit>
                      </S.CurrentPrice>
                    </S.Price>
                  </S.Information>
                </Link>
              </S.TrendingNowsItem>
            );
          })}
        </S.TrendingNowList>
      );
    });
  }, [data]);
  return (
    <S.TrendingNowWrapper>
      <S.HeadingTrendingNow>
        <h1>TÌM KIẾM HÀNG ĐẦU</h1>
      </S.HeadingTrendingNow>
      <Carousel
        style={{ width: "100% " }}
        autoplay
        dots
        dotPosition={"top"}
        autoplaySpeed={1500}
      >
        {renderTrendingNow}
      </Carousel>
    </S.TrendingNowWrapper>
  );
}

export default TrendingNow;
