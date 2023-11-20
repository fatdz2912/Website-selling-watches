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
function Favorite() {
  const { favoriteList } = useSelector((state) => state.favorite);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getFavoriteListRequest({
        userId: userInfo.data.id,
        page: 1,
        limit: 8,
      })
    );
  }, []);

  const renderProductFavorite = useMemo(() => {
    return favoriteList.data?.map((item) => {
      return (
        <S.FavoriteItem key={item.id}>
          <S.ImageWrapper span={4}>
            <img src={item.product.imagePrevious}></img>
          </S.ImageWrapper>
          <S.Name span={16}>{item.product.name}</S.Name>
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
        <FaRegStar /> FAVORITE-{favoriteList.data.length}
      </S.Heading>
      <S.FavoriteList>{renderProductFavorite}</S.FavoriteList>
    </S.FavoriteWrapper>
  );
}

export default Favorite;
