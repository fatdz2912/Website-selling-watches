import { FaCheckCircle } from "react-icons/fa";

import * as S from "./style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Successpay() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Thanh toán thành công";
  }, []);

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const params = useParams();
  return (
    <S.SuccessPayWrapper>
      <S.SuccessPay>
        <FaCheckCircle size={150} color="#0fe40f" />
        <S.Heading>Đặt hàng thành công</S.Heading>
        <S.OrderNumber>
          Mã số đơn hàng của bạn là
          <S.Number> {params.id.toUpperCase()}</S.Number>
        </S.OrderNumber>
        {userInfo.data.id && (
          <S.OrderNumber>
            Bạn có thể xem chi tiết trong (
            <Link to={ROUTES.USER.ORDER_HISTORY}> Đơn hàng của tôi.</Link>)
          </S.OrderNumber>
        )}
        <S.Revert onClick={() => navigate(ROUTES.USER.HOME)}>
          QUAY LẠI TRANG CHỦ
        </S.Revert>
      </S.SuccessPay>
    </S.SuccessPayWrapper>
  );
}

export default Successpay;
