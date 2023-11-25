import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { ROUTES } from "constants/routes";
import qs from "qs";
function Hero() {
  const navigate = useNavigate();
  return (
    <S.Hero>
      <S.ImageHero src="https://cdn2.jomashop.com/media/wysiwyg/sales-event/11_topbar.png"></S.ImageHero>
      <S.ContentHero>
        <S.TextHero>11.11 EXCLUSIVE SALE:</S.TextHero>
        <S.HeroDiscount> UP TO 80% OFF</S.HeroDiscount>
      </S.ContentHero>
      <S.ShopNow
        onClick={() =>
          navigate({
            pathname: ROUTES.USER.PRODUCT_LIST,
            search: qs.stringify({
              discountOrder: "desc",
            }),
          })
        }
      >
        SHOP NOW
      </S.ShopNow>
    </S.Hero>
  );
}

export default Hero;
