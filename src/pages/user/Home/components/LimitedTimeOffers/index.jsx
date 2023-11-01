import { Button, Carousel } from "antd";
import { useEffect, useMemo } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { PRODUCT_DISCOUNT } from "constants/paging";
import { getDiscountProductListRequest } from "redux/slicers/product.slice";

import { data } from "App/data";
import * as S from "./style";
import { ROUTES } from "constants/routes";
import { useDispatch } from "react-redux";

function LimitedTimeOffers() {
  const { limitedTimeOffers } = data;
  const groupLimitedOffer = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDiscountProductListRequest({
        limit: PRODUCT_DISCOUNT,
        discountOrder: "desc",
      })
    );
  }, []);
  // Giảm giá sốc
  for (let i = 0; i < limitedTimeOffers.length; i += 3) {
    groupLimitedOffer.push(limitedTimeOffers.slice(i, i + 3));
  }
  const renderLimitedTimeOffers = useMemo(() => {
    return groupLimitedOffer.map((group, index) => {
      return (
        <S.LimitedOfferList
          key={index}
          gutter={[20, 20]}
          justify={"space-between"}
        >
          {group.map((item, index) => {
            return (
              <S.LimitedOffersItem md={8} xs={8} key={index}>
                <S.ImageWrapper>
                  <S.Image src={item.image}></S.Image>
                </S.ImageWrapper>
                <S.Information>
                  <S.Heading>{item.heading}</S.Heading>
                  <S.Decribe>{item.describe}</S.Decribe>
                  <S.Discount>{item.discount}</S.Discount>
                </S.Information>
              </S.LimitedOffersItem>
            );
          })}
        </S.LimitedOfferList>
      );
    });
  }, [limitedTimeOffers]);
  return (
    <S.LimitedOffersWrapper>
      <S.HeadingLimitedOffers>
        <h1>KHUYẾN MÃI ĐẶC BIỆT</h1>
        <Button
          onClick={() =>
            navigate({
              pathname: ROUTES.USER.PRODUCT_LIST,
              search: qs.stringify({
                discountOrder: "desc",
              }),
            })
          }
        >
          TẤT CẢ ƯU ĐÃI
        </Button>
      </S.HeadingLimitedOffers>
      <Carousel
        style={{ width: "100% " }}
        autoplay
        dots
        dotPosition={"top"}
        autoplaySpeed={3000}
      >
        {renderLimitedTimeOffers}
      </Carousel>
    </S.LimitedOffersWrapper>
  );
}

export default LimitedTimeOffers;
