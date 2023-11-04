import { Button, Col, Row, Space, Rate } from "antd";
import { FaShoppingCart } from "react-icons/fa";

import { formatNumberWithCommaAndDecimal } from "components/fomatNumber";
import * as S from "./style";

function Product({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  quantity,
  image,
  name,
  category,
  discount,
  price,
}) {
  return (
    <S.ProductDetail gutter={[16, 16]}>
      <Col sm={24} md={24} lg={14}>
        <S.ImageWrapper>
          <S.Image src={image} />
        </S.ImageWrapper>
      </Col>
      <Col sm={24} md={24} lg={10}>
        <Row>
          <Col md={18} xs={18}>
            <S.Brands>{category?.name.toUpperCase()}</S.Brands>
            <S.Name>{name}</S.Name>
            <S.Preview>
              <Rate value={5} allowHalf disabled />
              <S.Evaluate>? Đánh giá</S.Evaluate>
              <S.Sold>? Đã Bán</S.Sold>
            </S.Preview>
          </Col>
          <S.Report md={6} xs={6}>
            Tố cáo
          </S.Report>
          <S.Price>
            <S.OldPrice discount={discount} sm={24} md={24}>
              ${formatNumberWithCommaAndDecimal(parseInt(price))}
              .00
            </S.OldPrice>
            <S.NewPrice>
              $
              {formatNumberWithCommaAndDecimal(
                discount !== ""
                  ? parseInt(price) -
                      (parseInt(price) * parseInt(discount)) / 100
                  : parseInt(price)
              )}
              .00
            </S.NewPrice>
            <S.Discount discount={discount}> giảm {discount}% </S.Discount>
          </S.Price>
          <S.QuantityWrapper md={24} lg={24} xs={24}>
            <S.Quantity>Số Lượng:</S.Quantity>
            <Button onClick={() => handleDecreaseQuantity()}>-</Button>
            <Button>{quantity}</Button>
            <Button onClick={() => handleIncreaseQuantity()}>+</Button>
          </S.QuantityWrapper>
          <Col md={24} lg={24} xs={24}>
            <S.Condition>CONDITION: NEW </S.Condition>
          </Col>
          <Col md={24} lg={24} xs={24}>
            <S.Stock>Có sẵn trong kho </S.Stock>
          </Col>
          <Col md={24} lg={24} xs={24}>
            <S.Transport>Miễn phí vận chuyển</S.Transport>
          </Col>
          <Col md={24} lg={18} xs={24}>
            <Space size={30}>
              <S.AddCart type="primary">
                <FaShoppingCart size={30} style={{ marginRight: 15 }} />
                Thêm vào giỏ
              </S.AddCart>
              <S.Buy>Mua ngay</S.Buy>
            </Space>
          </Col>
        </Row>
      </Col>
    </S.ProductDetail>
  );
}

export default Product;
