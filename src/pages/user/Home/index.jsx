import * as S from "./style";
import SpecialOffer from "./components/SpecialOffer";
import TrendingNow from "./components/TrendingNow";
import { useMemo, useState } from "react";
import {} from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import qs from "qs";
function Home() {
  const navigate = useNavigate();

  const typedClocks = [
    {
      id: "1",
      name: "Đồng Hồ Nam",
      image: "https://cdn2.jomashop.com/media/wysiwyg/mens_round_150.png",
      gender: "Nam",
    },
    {
      id: "2",
      name: "Đồng Hồ Nữ",
      image: "https://cdn2.jomashop.com/media/wysiwyg/ladies_round_150.png",
      gender: "Nữ",
    },
    {
      id: "3",
      name: "Tất Cả",
      image: "https://cdn2.jomashop.com/media/wysiwyg/sale_round_150.png",
      gender: undefined,
    },
  ];
  const renderTypeClocks = useMemo(() => {
    // render TypeClocks
    return typedClocks.map((item, index) => {
      return (
        <S.TypeClockItem
          md={8}
          xs={8}
          key={index}
          onClick={() => {
            navigate({
              pathname: ROUTES.USER.PRODUCT_LIST,
              search: qs.stringify({
                gender: item.gender,
              }),
            });
          }}
        >
          <S.ImageTypeWrapper>
            <S.ImageTypeClock src={item.image}></S.ImageTypeClock>
          </S.ImageTypeWrapper>
          <S.NameTypeClock>{item.name}</S.NameTypeClock>
        </S.TypeClockItem>
      );
    });
  }, []);
  const renderTypeClocksMobile = useMemo(() => {
    return typedClocks.map((item, index) => {
      return (
        <S.TypedMobileItem
          key={index}
          onClick={() => {
            navigate({
              pathname: ROUTES.USER.PRODUCT_LIST,
              search: qs.stringify({
                gender: item.gender,
              }),
            });
          }}
        >
          {item.name.toUpperCase()}
        </S.TypedMobileItem>
      );
    });
  }, []);
  // render trending now
  return (
    <S.HomeWrapper gutter={[16, 16]}>
      <S.LogoWrapper xs={24} md={24} sm={24} xl={24}>
        <S.Logo src="https://media.licdn.com/dms/image/C5112AQEfptQtGhQJzg/article-cover_image-shrink_720_1280/0/1520153250066?e=2147483647&v=beta&t=OFTPWbq17Js1SyMYjopAHujweUE000l92Dn8kgYHAO0"></S.Logo>
        <S.TypedClockList gutter={[16, 16]} justify={"space-between"}>
          {renderTypeClocks}
        </S.TypedClockList>
      </S.LogoWrapper>
      <S.TypeClockMobile justify={"space-between"}>
        {renderTypeClocksMobile}
      </S.TypeClockMobile>
      <SpecialOffer />
      <TrendingNow />
    </S.HomeWrapper>
  );
}

export default Home;
