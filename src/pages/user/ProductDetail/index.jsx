import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Col, notification } from "antd";

import Product from "./components/Product";
import Preview from "./components/Review";
import InformationDetail from "./components/InformationDetail";
import Hero from "components/Hero";

import { getProductDetailRequest } from "redux/slicers/product.slice";
import { addCart } from "redux/slicers/cart.slice";

import * as S from "./style";

function ProductDetail() {
  const params = useParams();
  const { id } = params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { reviewList } = useSelector((state) => state.review);

  const averageRate = useMemo(
    () =>
      reviewList.data.length
        ? (
            reviewList.data.reduce((total, item) => total + item.rate, 0) /
            reviewList.data.length
          ).toFixed(1)
        : 0,
    [reviewList.data]
  );

  const {
    description,
    image,
    name,
    category,
    discount,
    oldPrice,
    currentPrice,
  } = productDetail.data;
  useEffect(() => {
    dispatch(
      getProductDetailRequest({
        id: id,
      })
    );
    window.scrollTo({
      top: 0,
    });
    document.title = `Sản phẩm chi tiết`;
  }, [id]);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addCart({
        data: {
          productId: id,
          name: productDetail.data.name,
          currentPrice: productDetail.data.currentPrice,
          quantity: quantity,
          image: image,
        },
      })
    );
  };

  return (
    <>
      <Hero />
      <S.ProductDetailWrapper>
        <Product
          averageRate={averageRate}
          image={image}
          name={name}
          category={category}
          discount={discount}
          oldPrice={oldPrice}
          currentPrice={currentPrice}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          quantity={quantity}
          quantityData={reviewList.data.length}
          handleAddToCart={handleAddToCart}
          productId={id}
        />
        <S.Description md={24} xs={24} lg={12}>
          <S.TitleDESC>MÔ TẢ SẢN PHẨM:</S.TitleDESC>
          <S.DESC>{description}</S.DESC>
        </S.Description>
        <Col md={0} xs={0} lg={1}></Col>
        <Col md={24} xs={24} lg={11}>
          <InformationDetail productDetail={productDetail} />
        </Col>
        <S.Guaranteed md={24} xs={24} lg={24}>
          <p>Một mẫu {category?.name} tuyệt đệp đến từ JOMASHOP !!</p>
          <p>– Với nét thiết kế cổ điển tinh tế nhưng cũng rất sang trọng</p>
          <p>– Cùng điểm nhấn là ô MoonPhasse góc 6h ấn tượng</p>
          <p>– Size {productDetail.data?.size}mm dễ lên tay</p>
          <p>
            – Bộ truyền động RW 4280 với 26 chân kính, 28800 vph &amp; 38h tích
            cót
          </p>
          <p>– Kính Sapphire chống xước, đc phủ chống lóa</p>
          <p>– Chống nước 30m đủ dùng</p>
        </S.Guaranteed>
        <S.ImageGuranteedWrapper>
          <S.Image src="https://luxewatch.vn/wp-content/uploads/2018/08/63636-compressed.jpg"></S.Image>
        </S.ImageGuranteedWrapper>
        <Preview id={id} averageRate={averageRate} />
      </S.ProductDetailWrapper>
    </>
  );
}

export default ProductDetail;
