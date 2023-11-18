import { Button, Col, Row, Space, Rate, Breadcrumb, notification } from "antd";
import { FaShoppingCart, FaHome, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  useMemo,  } from "react";

import {
  favoriteProductRequest,
  unFavoriteProductRequest,
} from "redux/slicers/favorite.slice";
import { updateProductBuy } from "redux/slicers/cart.slice";

import { ROUTES } from "constants/routes";
import { color } from "themes/color";
import * as S from "./style";

function Product({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  quantity,
  image,
  name,
  category,
  discount,
  oldPrice,
  currentPrice,
  averageRate,
  handleAddToCart,
  productId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);

  const isFavorite = useMemo(
    () =>
      productDetail.data.favorites
        ? productDetail.data.favorites.some(
            (item) => item.userId === userInfo.data.id
          )
        : false,
    [productDetail.data.favorites, userInfo.data.id]
  );
  const handleBuyNow = () => {
    const selectedRows = [{ quantity, name, currentPrice, productId, image }];
    dispatch(updateProductBuy({ selectedRows }));
    navigate(ROUTES.USER.CHECKOUT);
  };
  const handleToggleFavorite = () => {
    if (userInfo.data.id) {
      if (isFavorite) {
        const favoriteData = productDetail.data.favorites?.find(
          (item) => item.userId === userInfo.data.id
        );
        dispatch(
          unFavoriteProductRequest({
            id: favoriteData.id,
          })
        );
      } else {
        dispatch(
          favoriteProductRequest({
            productId: productDetail.data.id,
            userId: userInfo.data.id,
          })
        );
      }
    } else {
      notification.error({
        message: "Vui lòng đăng nhập để thực hiện chức năng này!",
      });
    }
  };
  return (
    <S.ProductDetail gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={14}>
        <S.ImageWrapper>
          <S.Discount>
            <p>-{discount}%</p>
          </S.Discount>
          <S.FullBox>
            <p>MỚI - FULLBOX 100%</p>
          </S.FullBox>
          <S.Image src={image} />
        </S.ImageWrapper>
      </Col>
      <Col sm={24} md={24} lg={10}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to={ROUTES.USER.HOME}>
                  <Space>
                    <FaHome />
                    <span>Trang chủ</span>
                  </Space>
                </Link>
              ),
            },
            {
              title: (
                <Link to={ROUTES.USER.PRODUCT_LIST}>
                  <Space>
                    <span>Danh sách sản phẩm</span>
                  </Space>
                </Link>
              ),
            },
            {
              title: "Chi tiết sản phẩm",
            },
          ]}
        />
        <Row gutter={[16, 16]} style={{ marginTop: "1em" }}>
          <Col md={18} xs={18}>
            <S.Brands>{category?.name.toUpperCase()}</S.Brands>
            <S.Name>{name}</S.Name>
            <S.Preview>
              <Col xs={12} md={12} lg={12}>
                <Rate value={averageRate} allowHalf disabled />({averageRate})
              </Col>
              <Col span={12}>
                <S.Heart>
                  <Button
                    size="large"
                    type="text"
                    danger={isFavorite}
                    icon={
                      isFavorite ? (
                        <FaHeart size={24} color={color.outstanding} />
                      ) : (
                        <FaHeart size={24} />
                      )
                    }
                    onClick={() => handleToggleFavorite()}
                  ></Button>
                  {productDetail?.data?.favorites?.length} Lượt Thích
                </S.Heart>
              </Col>
            </S.Preview>
          </Col>
          <S.Report md={6} xs={6}>
            Tố cáo
          </S.Report>
          <S.Price sm={24} md={24}>
            <S.OldPrice discount={discount}>
              ${oldPrice?.toLocaleString()} <S.Unit>₫</S.Unit>
            </S.OldPrice>
            <S.CurrentPrice>
              ${currentPrice?.toLocaleString()} <S.Unit>₫</S.Unit>
            </S.CurrentPrice>
          </S.Price>
          <S.QuantityWrapper md={24} lg={24} xs={24}>
            <S.Quantity>Số Lượng:</S.Quantity>
            <Button onClick={() => handleDecreaseQuantity()}>-</Button>
            <Button>{quantity}</Button>
            <Button onClick={() => handleIncreaseQuantity()}>+</Button>
          </S.QuantityWrapper>
          <Col md={24} lg={24} xs={24}>
            <S.Info gutter={[8, 8]}>
              <S.Title xs={12} md={12} lg={12}>
                TRẠNG THÁI
              </S.Title>
              <S.Desc xs={12} md={12} lg={12}>
                NEW
              </S.Desc>
            </S.Info>
            <S.Info gutter={[8, 8]}>
              <S.Title xs={12} md={12} lg={12}>
                XUẤT XỨ
              </S.Title>
              <S.Desc xs={12} md={12} lg={12}>
                Thụy Sỹ
              </S.Desc>
            </S.Info>
            <S.Info gutter={[8, 8]}>
              <S.Title xs={12} md={12} lg={12}>
                KHO
              </S.Title>
              <S.Desc xs={12} md={12} lg={12}>
                Có sẵn
              </S.Desc>
            </S.Info>
            <S.Info gutter={[8, 8]}>
              <S.Title xs={12} md={12} lg={12}>
                PHÍ VẬN CHUYỂN
              </S.Title>
              <S.Desc xs={12} md={12} lg={12}>
                FREE
              </S.Desc>
            </S.Info>
          </Col>
          <Col md={24} lg={24} xs={24}>
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              <S.AddCart type="primary" onClick={() => handleAddToCart()}>
                <FaShoppingCart size={30} style={{ marginRight: 15 }} />
                Thêm vào giỏ
              </S.AddCart>
              <S.Buy onClick={() => handleBuyNow()}>Mua ngay</S.Buy>
            </Row>
          </Col>
        </Row>
      </Col>
    </S.ProductDetail>
  );
}

export default Product;
