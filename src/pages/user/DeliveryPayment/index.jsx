import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function DELIVERY_PAYMENT() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Vận chuyển và thanh toán";
  }, []);
  return (
    <>
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
            title: "Giao hàng và thanh toán",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
    <p class="ql-align-justify">Hướng dẫn thanh toán</p>
<p class="ql-align-justify">
    <a href="https://www.dangquangwatch.vn/tin-tuc/910/1111-ngay-doc-than-sale-doc-nhat-giam-den-50-tai-dang-quang-watch.html" target="_blank" style="color: inherit;">Quý khách có thể thanh toán khi mua hàng tại hệ thống cửa hàng ĐĂNG QUANG&nbsp;WATCH hoặc đặt mua hàng Online bằng những cách sau:</a>
</p>
<p class="ql-align-justify">
    <br>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong>1. Thanh toán tiền mặt tại nhà khi nhận hàng thông qua hình thức giao hàng trực tiếp, chuyển phát nhanh hoặc COD:</strong>
</h2>
<p class="ql-align-justify">Khi nhân viên giao hàng giao phát, khách hàng kiểm tra sản phẩm về hình thức đảm bảo, khách hàng nhận hàng và thanh toán trực tiếp cho nhân viên giao hàng theo giá trị tiền trên hóa đơn. Ngoài ra khách hàng không phải thanh toán bất kỳ 1 chi phí nào khác.</p>
<p
class="ql-align-justify">&nbsp;Đơn giản, An toàn, Không chút rắc rối mà lại an tâm tuyệt đối khi quý khách chọn thanh toán COD tại Đăng Quang Watch.</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <h2 class="ql-align-justify">
        <strong>2. Thanh toán tiền mặt tại cửa hàng:</strong>
    </h2>
    <p class="ql-align-justify">Khách hàng đến cửa hàng tham quan, mua sản phẩm sẽ thanh toán trực tiếp bằng tiền mặt hoặc quẹt thẻ qua POS ngân hàng tại cửa hàng.</p>
    <h2 class="ql-align-justify">
        <strong>3. Chuyển khoản qua ngân hàng:</strong>
    </h2>
    <p class="ql-align-justify">Nếu địa điểm giao hàng là ngoại thành, ngoại tỉnh nhưng khác với địa điểm thanh toán (trong trường hợp Quý khách gửi quà, gửi hàng cho bạn bè, đối tác …) chúng tôi sẽ thu tiền trước 100% giá trị hàng bằng phương thức chuyển khoản trước khi giao hàng.
        Khách hàng được miễn phí vận chuyển</p>
    <p class="ql-align-justify">Khách hàng có thể hoàn toàn yên tâm với hình thức thanh toán này. vì khi chuyển tiền ở ngân hàng , ngân hàng sẽ đưa cho bạn một giấy ủy nhiệm chi trong đó có số tiền và số TK mà&nbsp;bạn chuyển tiền tới, nên các bạn&nbsp;không phải lo lắng mình chuyển
        tiền rồi mà ĐĂNG&nbsp;QUANG&nbsp;WATCH không chuyển hàng, giấy ủy nhiệm chi đó chính là bằng chứng bạn đã chuyển tiền&nbsp;và&nbsp;ngân hàng&nbsp;mà bạn chuyên tiền có thể làm rõ điều đó cho bạn. Chúng tôi&nbsp;bán hàng luôn đăt chữ&nbsp;tín&nbsp;lên
        đầu và luôn cố gắng có những chất lượng dịch vụ tốt nhất với khách hàng.</p>
    <p class="ql-align-justify">
        <span style="font-family: arial; font-size: small;">&nbsp;</span>
        <em>a. Thanh toán chuyển khoản trực tiếp (nhận hàng sau):</em>
    </p>
    <p class="ql-align-justify">
        <span style="font-family: arial; font-size: small;">&nbsp;Chủ tài khoản:&nbsp;</span>
        <strong style="font-family: arial; font-size: small;">Ngô Văn Trị</strong>
    </p>
    <p class="ql-align-justify">
        <span style="font-family: arial; font-size: small;">-Số tài khoản:&nbsp;</span>
        <strong>12410006669669</strong>
        <strong style="font-family: arial; font-size: small;">&nbsp;</strong>
        <span style="font-family: arial; font-size: small;">Ngân hàng</span>
        <strong style="font-family: arial; font-size: small;">&nbsp;Vietcombank</strong>
    </p>
    <p class="ql-align-justify">
        <span style="font-family: arial;">Ngay sau khi chúng tôi nhận được tiền, Qúy khách sẽ nhận được hàng từ 2-3 ngày.</span>
    </p>
    <p class="ql-align-justify">
        <a href="https://www.dangquangwatch.vn/tin-tuc/910/1111-ngay-doc-than-sale-doc-nhat-giam-den-50-tai-dang-quang-watch.html" target="_blank" style="color: inherit;">Để biết thêm thông tin chi tiết, Quý khách vui lòng liên hệ trực tiếp với nhân viên tư vấn bán hàng hoặc liên hệ theo số tổng đài miễn phí 18006005 để được hỗ trợ.Xin trân trọng cảm ơn!</a>
    </p>
    <p class="ql-align-justify">
        <br>
    </p>
  `,
        }}
      ></div>
    </>
  );
}

export default DELIVERY_PAYMENT;
