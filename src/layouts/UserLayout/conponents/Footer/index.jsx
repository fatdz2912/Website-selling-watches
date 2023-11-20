import { FaFacebook } from "react-icons/fa6";
import * as S from "./style";
import imageZalo from "./image/zalo.PNG";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
function Footer() {
  return (
    <S.FooterWrapper>
      <S.Footer justify={"space-between"} gutter={[32, 32]}>
        <S.Information xs={24} xl={8}>
          <S.Heading>THÔNG TIN CHUNG</S.Heading>
          <Link to={ROUTES.USER.ABOUT}>
            <S.DESC>Giới thiệu</S.DESC>
          </Link>
          <Link to={ROUTES.USER.NEWS}>
            <S.DESC>Tin tức</S.DESC>
          </Link>
          <Link to={ROUTES.USER.DELIVERY_PAYMENT}>
            <S.DESC>Giao hàng và thanh toán</S.DESC>
          </Link>
          <Link to={ROUTES.USER.CONTACT}>
            <S.DESC>Liên hệ</S.DESC>
          </Link>
        </S.Information>
        <S.Information xs={24} xl={8}>
          <S.Heading>HỖ TRỢ KHÁCH HÀNG</S.Heading>
          <Link to={ROUTES.USER.GENEGAL}>
            <S.DESC>Chính sách & Quy định chung</S.DESC>
          </Link>
          <Link to={ROUTES.USER.MAINTENANCE}>
            <S.DESC>Chính sách bảo hành</S.DESC>
          </Link>
          <Link to={ROUTES.USER.SHIPPING_POLICY}>
            <S.DESC>Chính sách vận chuyển</S.DESC>
          </Link>
          <Link to={ROUTES.USER.PRIVACY_POLICY}>
            <S.DESC>Chính sách bảo mật</S.DESC>
          </Link>
        </S.Information>
        <S.Information xs={24} xl={8}>
          <S.Heading>KẾT NỐI</S.Heading>
          <Link to="https://www.facebook.com/Fatdz2912">
            <S.ConnectFB>
              <FaFacebook size={30} />
              <span>Fanpage Facebook</span>
            </S.ConnectFB>
          </Link>
          <Link to="https://zalo.me/0377460815">
            <S.ConnectZalo>
              <S.ImageZaloWrapper>
                <S.ImageZalo src={imageZalo} alt="Image Zalo" />
              </S.ImageZaloWrapper>
              <span>Zalo Chat official</span>
            </S.ConnectZalo>
          </Link>
        </S.Information>
      </S.Footer>
    </S.FooterWrapper>
  );
}

export default Footer;
