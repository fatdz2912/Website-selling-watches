import { FaCheckCircle } from "react-icons/fa";

import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";

function Successpay() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Successpay Page";
  }, []);
  const navigate = useNavigate();
  return (
    <S.SuccessPayWrapper>
      <S.SuccessPay>
        <FaCheckCircle size={150} color="#0fe40f" />
        <S.Heading>Thanh toán thành công</S.Heading>
        <S.OrderNumber>
          Mã số đơn hàng của bạn là <S.Number>833831882</S.Number>
        </S.OrderNumber>
        <S.OrderNumber>
          Bạn có thể xem chi tiết trong <Link>Đơn hàng của tôi.</Link>
        </S.OrderNumber>
        <S.Revert onClick={() => navigate(ROUTES.USER.HOME)}>
          QUAY LẠI TRANG CHỦ
        </S.Revert>
      </S.SuccessPay>
    </S.SuccessPayWrapper>
  );
}

export default Successpay;
