import { FaFacebook } from "react-icons/fa6";
import * as S from "./style";
import imageZalo from "./image/zalo.PNG";
function Footer() {
  return (
    <S.FooterWrapper>
      <S.Footer justify={"space-between"} gutter={[32, 32]}>
        <S.Information xs={24} xl={8}>
          <S.Heading>GENERAL INFORMATION</S.Heading>
          <S.DESC>About</S.DESC>
          <S.DESC>News</S.DESC>
          <S.DESC>Delivery and payment</S.DESC>
          <S.DESC>Contact</S.DESC>
        </S.Information>
        <S.Information xs={24} xl={8}>
          <S.Heading>CUSTOMER SUPPORT</S.Heading>
          <S.DESC>General policies and regulations</S.DESC>
          <S.DESC>Policy maintenance</S.DESC>
          <S.DESC>Shipping policy</S.DESC>
          <S.DESC>Privacy Policy</S.DESC>
        </S.Information>
        <S.Information xs={24} xl={8}>
          <S.Heading>CONNECT</S.Heading>
          <S.ConnectFB>
            <FaFacebook size={30} color="blue" />
            <span>Fanpage Facebook</span>
          </S.ConnectFB>
          <S.ConnectZalo>
            <S.ImageZaloWrapper>
              <S.ImageZalo src={imageZalo} alt="Image Zalo" />
            </S.ImageZaloWrapper>
            <span>Zalo Chat official</span>
          </S.ConnectZalo>
        </S.Information>
      </S.Footer>
    </S.FooterWrapper>
  );
}

export default Footer;
