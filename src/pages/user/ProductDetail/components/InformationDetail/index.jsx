import { useSelector } from 'react-redux'

import * as S from './style'
function InformationDetail() {
  const { productDetail } = useSelector((state) => state.product)
  const { category, series, gender, engine, powerReserve, size, thickness, material, shape, back } = productDetail.data
  return (
    <>
      <S.TitleMoreDetail>Chi tiết sản phẩm</S.TitleMoreDetail>
      <S.DetailWrapper gutter={[16, 16]}>
        <S.MoreDetailBody md={12} xs={12}>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Thương Hiệu:</S.MoreDetailLabel>
            <S.MoreDetailValue>{category?.name}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Series Label:</S.MoreDetailLabel>
            <S.MoreDetailValue>{series}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Giới Tính:</S.MoreDetailLabel>
            <S.MoreDetailValue>{gender}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Động Cơ:</S.MoreDetailLabel>
            <S.MoreDetailValue>{engine}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Dự Trữ Điện:</S.MoreDetailLabel>
            <S.MoreDetailValue>{powerReserve} Giờ</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
        <S.MoreDetailBody md={12} xs={12}>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Kích Cỡ:</S.MoreDetailLabel>
            <S.MoreDetailValue>{size} mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Độ Dày:</S.MoreDetailLabel>
            <S.MoreDetailValue>{thickness} mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Vật Liệu:</S.MoreDetailLabel>
            <S.MoreDetailValue>{material}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Hình Dạng:</S.MoreDetailLabel>
            <S.MoreDetailValue>{shape}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>Mặt Sau:</S.MoreDetailLabel>
            <S.MoreDetailValue>{back}</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
      </S.DetailWrapper>
    </>
  )
}

export default InformationDetail
