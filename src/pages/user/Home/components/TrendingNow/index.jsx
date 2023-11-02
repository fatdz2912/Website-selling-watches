import { Button, Carousel } from "antd";
import { useMemo } from "react";
import * as S from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductListRequest } from "redux/slicers/product.slice";
import { PRODUCT_DISCOUNT } from "constants/paging";

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
                <S.ImageWrapper>
                  <S.Image src={item.image}></S.Image>
                </S.ImageWrapper>
                <S.Information>
                  <S.Heading>
                    {item.category.name.toUpperCase()}
                    <S.Decribe> {item.name}</S.Decribe>
                  </S.Heading>
                  <S.Price>
                    ${item.price}
                    <S.Discount discount={item.discount}>
                      giảm {item.discount}%{" "}
                    </S.Discount>
                  </S.Price>
                </S.Information>
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
