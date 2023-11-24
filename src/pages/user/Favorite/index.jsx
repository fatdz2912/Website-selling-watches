import { FaHeart, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";

import * as S from "./style";
import {
  getFavoriteListRequest,
  unFavoriteProductRequest,
} from "redux/slicers/favorite.slice";
import { color } from "themes/color";
import { Button } from "antd";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { updateProductBuy } from "redux/slicers/cart.slice";

function Favorite() {
  const { favoriteList } = useSelector((state) => state.favorite);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getFavoriteListRequest({
        userId: userInfo.data.id,
        page: 1,
        limit: 8,
      })
    );
  }, []);

  const handleShowMore = () => {
    dispatch(
      getFavoriteListRequest({
        userId: userInfo.data.id,
        page: favoriteList.meta.page + 1,
        limit: 8,
        more: true,
      })
    );
  };

  const handleBuyNow = (product) => {
    const { name, currentPrice, productId, imagePrevious } = product;
    const selectedRows = [
      { quantity: 1, name, currentPrice, productId, imagePrevious },
    ];
    dispatch(updateProductBuy({ selectedRows }));
    navigate(ROUTES.USER.CHECKOUT);
  };

  const renderProductFavorite = useMemo(() => {
    return favoriteList.data?.map((item) => {
      return (
        <S.FavoriteItem key={item.id}>
          <S.ImageWrapper span={4}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: item.productId,
              })}
            >
              <img src={item.product?.imagePrevious}></img>
            </Link>
          </S.ImageWrapper>
          <S.Name span={12}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: item.productId,
              })}
            >
              <div>{item.product?.name}</div>
            </Link>
            <Button
              style={{ marginTop: "20px" }}
              onClick={() => handleBuyNow(item.product)}
            >
              Đặt hàng
            </Button>
          </S.Name>
          <S.Heart span={4}>
            <FaHeart
              onClick={() =>
                dispatch(
                  unFavoriteProductRequest({
                    id: item.id,
                    userId: userInfo.data.id,
                    page: 1,
                    limit: 8,
                  })
                )
              }
              size={30}
              color={color.outstanding}
            />
          </S.Heart>
        </S.FavoriteItem>
      );
    });
  }, [favoriteList.data]);
  return (
    <S.FavoriteWrapper>
      <S.Heading>
        <FaRegStar /> FAVORITE-{favoriteList.meta?.total}
      </S.Heading>
      <S.FavoriteList>{renderProductFavorite}</S.FavoriteList>
      {favoriteList.data.length !== favoriteList.meta.total && (
        <S.ShowMore>
          <Button onClick={() => handleShowMore()}>Hiển thị thêm</Button>
        </S.ShowMore>
      )}
    </S.FavoriteWrapper>
  );
}

export default Favorite;
