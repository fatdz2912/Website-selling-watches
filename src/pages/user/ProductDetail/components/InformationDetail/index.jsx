import { Button, Col, Row, Space } from "antd";

import * as S from "./style";
function InformationDetail({ productDetail }) {
  return (
    <Col md={24} xs={24}>
      <S.DetailWrapper gutter={[16, 16]}>
        <S.TitleMoreDetail md={24} xs={24}>
          CHI TIẾT SẢN PHẨM
        </S.TitleMoreDetail>
        <S.MoreDetailBody md={16} xs={16}>
          <S.MoreDetailHead>THÔNG TIN</S.MoreDetailHead>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>THƯƠNG HIỆU:</S.MoreDetailLabel>
            <S.MoreDetailValue>
              {productDetail?.category?.name}
            </S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>SERIES LABEL:</S.MoreDetailLabel>
            <S.MoreDetailValue>Submariner</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>GENDER:</S.MoreDetailLabel>
            <S.MoreDetailValue>Nam</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>ĐỘNG CƠ:</S.MoreDetailLabel>
            <S.MoreDetailValue>Rolex Calibre 3230</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>DỰ TRỮ ĐIỆN:</S.MoreDetailLabel>
            <S.MoreDetailValue>70 Giờ</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
        <S.MoreDetailBody md={8} xs={8}>
          <S.MoreDetailHead>CASE</S.MoreDetailHead>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>KÍCH CỠ:</S.MoreDetailLabel>
            <S.MoreDetailValue>41 mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>ĐỘ DÀY:</S.MoreDetailLabel>
            <S.MoreDetailValue>12.5 mm</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>VẬT LIỆU:</S.MoreDetailLabel>
            <S.MoreDetailValue>thép không nỉ</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>HÌNH DẠNG:</S.MoreDetailLabel>
            <S.MoreDetailValue>Tròn</S.MoreDetailValue>
          </S.MoreDetailContent>
          <S.MoreDetailContent>
            <S.MoreDetailLabel>MẶT SAU:</S.MoreDetailLabel>
            <S.MoreDetailValue>Chất rắn</S.MoreDetailValue>
          </S.MoreDetailContent>
        </S.MoreDetailBody>
      </S.DetailWrapper>
    </Col>
  );
}

export default InformationDetail;
