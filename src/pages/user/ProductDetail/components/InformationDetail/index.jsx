import { Col } from "antd";
import { useSelector } from "react-redux";

import * as S from "./style";
function InformationDetail() {
  const { productDetail } = useSelector((state) => state.product);
  const {
    category,
    series,
    gender,
    engine,
    powerReserve,
    size,
    thickness,
    material,
    shape,
    back,
  } = productDetail.data;
  return (
    <Col md={24} xs={24}>
      <S.DetailWrapper gutter={[16, 16]}>
        <S.TitleMoreDetail md={24} xs={24}>
          CHI TIẾT SẢN PHẨM
        </S.TitleMoreDetail>
        <S.MoreDetailBody md={12} xs={12}>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>THƯƠNG HIỆU:</S.MoreDetailLabel>
            <S.MoreDetailValue>{category?.name}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>SERIES LABEL:</S.MoreDetailLabel>
            <S.MoreDetailValue>{series}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>GIỚI TÍNH:</S.MoreDetailLabel>
            <S.MoreDetailValue>{gender}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>ĐỘNG CƠ:</S.MoreDetailLabel>
            <S.MoreDetailValue>{engine}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>DỰ TRỮ ĐIỆN:</S.MoreDetailLabel>
            <S.MoreDetailValue>{powerReserve} Giờ</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
        <S.MoreDetailBody md={12} xs={12}>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>KÍCH CỠ:</S.MoreDetailLabel>
            <S.MoreDetailValue>{size} mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>ĐỘ DÀY:</S.MoreDetailLabel>
            <S.MoreDetailValue>{thickness} mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>VẬT LIỆU:</S.MoreDetailLabel>
            <S.MoreDetailValue>{material}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>HÌNH DẠNG:</S.MoreDetailLabel>
            <S.MoreDetailValue>{shape}</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>MẶT SAU:</S.MoreDetailLabel>
            <S.MoreDetailValue>{back}</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
      </S.DetailWrapper>
    </Col>
  );
}

export default InformationDetail;
