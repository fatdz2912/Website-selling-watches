import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { Row, Col, Space, Breadcrumb } from 'antd'
import { FaHome } from 'react-icons/fa'

import Product from './components/Product'
import Preview from './components/Review'
import InformationDetail from './components/InformationDetail'
import Hero from 'components/Hero'

import { ROUTES } from 'constants/routes'
import { getProductDetailRequest } from 'redux/slicers/product.slice'
import { addCart } from 'redux/slicers/cart.slice'

import * as S from './style'

function ProductDetail() {
  const params = useParams()
  const { id } = params
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { productDetail } = useSelector((state) => state.product)
  const { reviewList } = useSelector((state) => state.review)

  const averageRate = useMemo(
    () =>
      reviewList.data.length
        ? (reviewList.data.reduce((total, item) => total + item.rate, 0) / reviewList.data.length).toFixed(1)
        : 0,
    [reviewList.data]
  )

  const { description, imagePrevious, name, category, discount, oldPrice, currentPrice, imageHozontal, imageBehind } =
    productDetail.data
  useEffect(() => {
    dispatch(
      getProductDetailRequest({
        id: id,
      })
    )
    window.scrollTo({
      top: 0,
    })
    document.title = `Sản phẩm chi tiết`
  }, [id])
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleIncreaseQuantity = () => {
    if (quantity < productDetail.data.quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    dispatch(
      addCart({
        data: {
          productId: id,
          name: productDetail.data.name,
          currentPrice: productDetail.data.currentPrice,
          quantity: quantity,
          imagePrevious: imagePrevious,
          productAvailable: productDetail?.data?.quantity,
        },
      })
    )
  }

  return (
    <>
      <Hero />
      <S.ProductDetailWrapper>
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
              title: 'Chi tiết sản phẩm',
            },
          ]}
          style={{ marginTop: -4, marginBottom: 12 }}
        />
        <Row>
          <Product
            averageRate={averageRate}
            imagePrevious={imagePrevious}
            name={name}
            category={category}
            discount={discount}
            oldPrice={oldPrice}
            imageHozontal={imageHozontal}
            currentPrice={currentPrice}
            imageBehind={imageBehind}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            quantity={quantity}
            quantityData={reviewList.data.length}
            handleAddToCart={handleAddToCart}
            productId={id}
            productAvailable={productDetail.data?.quantity}
          />
        </Row>
      </S.ProductDetailWrapper>
      <S.ProductDetailWrapper>
        <Row gutter={[24, 24]}>
          <S.Description md={24} xs={24} lg={12}>
            <S.TitleDESC>Mô tả sản phẩm</S.TitleDESC>
            <S.DESC>{description}</S.DESC>
          </S.Description>
          <Col md={24} xs={24} lg={12}>
            <InformationDetail productDetail={productDetail} />
          </Col>
          <Col md={24} xs={24} lg={24}>
            <S.Guaranteed>
              <p>Một mẫu {category?.name} tuyệt đệp đến từ JOMASHOP !!</p>
              <p>– Với nét thiết kế cổ điển tinh tế nhưng cũng rất sang trọng</p>
              <p>– Cùng điểm nhấn là ô MoonPhasse góc 6h ấn tượng</p>
              <p>– Size {productDetail.data?.size}mm dễ lên tay</p>
              <p>– Bộ truyền động RW 4280 với 26 chân kính, 28800 vph &amp; 38h tích cót</p>
              <p>– Kính Sapphire chống xước, đc phủ chống lóa</p>
              <p>– Chống nước 30m đủ dùng</p>
            </S.Guaranteed>
          </Col>
          <S.ImageGuranteedWrapper>
            <S.Image src="https://luxewatch.vn/wp-content/uploads/2018/08/63636-compressed.jpg"></S.Image>
          </S.ImageGuranteedWrapper>
        </Row>
      </S.ProductDetailWrapper>
      <S.ProductDetailWrapper>
        <Preview id={id} averageRate={averageRate} />
      </S.ProductDetailWrapper>
    </>
  )
}

export default ProductDetail
