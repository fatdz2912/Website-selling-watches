import { Button, Carousel } from "antd";
import { useMemo } from "react";

import { data } from "../../../../../App/data";
import * as S from "./style";

function LimitedTimeOffers() {
  const { limitedTimeOffers } = data;
  // render limited Offers
  const groupLimitedOffer = [];
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
        <h1>Limited Time Offers</h1>
        <Button>SHOP ALL OFFERS</Button>
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
