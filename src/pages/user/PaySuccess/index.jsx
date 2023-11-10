import { FaRegCheckCircle } from "react-icons/fa";

import * as S from "./style";

function Successpay() {
  return (
    <S.SuccessPayWrapper>
      <S.IconWraapper>
        <FaRegCheckCircle color="green" />
      </S.IconWraapper>
    </S.SuccessPayWrapper>
  );
}

export default Successpay;
