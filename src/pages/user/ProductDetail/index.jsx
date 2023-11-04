import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./components/Product";
import Preview from "./components/InformationDetail/Preview";
import InformationDetail from "./components/InformationDetail";
import { getProductDetailRequest } from "redux/slicers/product.slice";
import * as S from "./style";

function ProductDetail() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);

  const { description, image, name, category, discount, price } =
    productDetail.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = `ProductDetail Page - ${params.id}`;
    dispatch(
      getProductDetailRequest({
        id: params.id,
      })
    );
  }, []);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <S.ProductDetailWrapper>
      <Product
        image={image}
        name={name}
        category={category}
        discount={discount}
        price={price}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        quantity={quantity}
      />
      <S.Description md={24} xs={24}>
        <S.TitleDESC>MÔ TẢ SẢN PHẨM:</S.TitleDESC>
        <S.DESC>{description}</S.DESC>
      </S.Description>
      <InformationDetail productDetail={productDetail} />
      <Preview />
    </S.ProductDetailWrapper>
  );
}

export default ProductDetail;
