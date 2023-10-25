import { FaStar } from "react-icons/fa";

import * as S from "./style";
import { Col } from "antd";
function Preview() {
  return (
    <S.PreviewWrapper gutter={[16, 16]}>
      <S.PreviewHead md={24} 
      xs={24}>
        ĐÁNH GIÁ SẢN PHẨM
      </S.PreviewHead>
      <Col xs={6} md={6} xl={6}>
        <S.RatingOverviewScore>
          <S.RatingOverview>4.9</S.RatingOverview>
          <S.RatingPeak> trên 5</S.RatingPeak>
        </S.RatingOverviewScore>
        <S.Stars>
          <FaStar size={17} />
          <FaStar size={17} />
          <FaStar size={17} />
          <FaStar size={17} />
          <FaStar size={17} />
        </S.Stars>
      </Col>
      <Col xs={18} md={18} xl={18}>
        <S.SearchOfOverview>
          <S.Comment>Bình luận(?)</S.Comment>
          <S.ImageAndVideo>Hình Ảnh/Video(?)</S.ImageAndVideo>
        </S.SearchOfOverview>
      </Col>
    </S.PreviewWrapper>
  );
}

export default Preview;
