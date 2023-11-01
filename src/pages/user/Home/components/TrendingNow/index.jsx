import { Button, Carousel } from "antd";
import { useMemo } from "react";

import { data } from "../../../../../App/data";
import * as S from "./style";

function TrendingNow() {
  const { trendingNow } = data;
  const groupTrendingNow = [];
  for (let i = 0; i < trendingNow.length; i += 3) {
    groupTrendingNow.push(trendingNow.slice(i, i + 3));
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
              <S.TrendingNowsItem xs={12} sm={8} md={8} key={index}>
                <S.ImageWrapper>
                  <S.Image src={item.image}></S.Image>
                </S.ImageWrapper>
                <S.Information>
                  <S.Heading>
                    {item.heading.toUpperCase()}
                    <S.Decribe> {item.describe}</S.Decribe>
                  </S.Heading>
                  <S.Price>
                    ${item.price}
                    <S.Discount> {item.discount}% Off</S.Discount>
                  </S.Price>
                </S.Information>
              </S.TrendingNowsItem>
            );
          })}
        </S.TrendingNowList>
      );
    });
  }, [trendingNow]);
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
