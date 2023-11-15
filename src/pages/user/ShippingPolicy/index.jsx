import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "ShippingPolicy Page";
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
            title: "Chính sách vận chuyển",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
 <p>
    <strong style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255);">Chính sách vận chuyển</strong>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Ngay sau khi đơn hàng được gửi đến, chúng tôi sẽ gửi thư (hoặc gọi điện) xác nhận rằng hàng hóa của Quý khách đang được chuyển đi. Hàng sẽ đến tận tay Quý khách trong vòng từ 1 đến 5 ngày (trừ ngày lễ và chủ nhật).</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">- Phí vận chuyển: Khách hàng được&nbsp;</span>
    <strong style="font-family: arial; font-size: small;">MIỄN PHÍ&nbsp;</strong>
    <span style="font-family: arial; font-size: small;">vận chuyển trên&nbsp;</span>
    <strong style="font-family: arial; font-size: small;">Toàn quốc</strong>
    <span style="font-family: arial; font-size: small;">.</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">- Thời gian xử lý đơn hàng:</span>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">+ Đơn đặt hàng từ 8h30 đến 17h30 thì chúng tôi sẽ liên hệ trong ngày.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">+ Đơn đặt hàng sau 17h30 thì chúng tôi sẽ liên hệ vào sáng hôm sau.</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">- Thời gian giao hàng:</span>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">+ Giao hàng trong ngày hoặc từ 1 - 2 ngày cho khách hàng có địa chỉ ở các quận nội thành Thành phố Hà Nội và các tỉnh lân cận.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">+ Giao hàng từ 2 – 5 ngày cho khách hàng có địa chỉ ở các tỉnh xa, miền Trung và miền Nam.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">+ Tuy nhiên, vào thời gian cao điểm (lễ, tết…) chúng tôi không thể giao hàng ngay nên sẽ thỏa thuận thời gian giao hàng cho Quý khách. Kính mong Quý khách thông cảm!</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Trước khi giao hàng chúng tôi sẽ gọi điện xác nhận rằng hàng hóa của Quý khách đang được chuyển đi. Hàng sẽ đến tận tay Quý khách trong vòng từ 1 đến 5 ngày (trừ ngày lễ và chủ nhật).</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Chúng tôi đảm bảo giao hàng trong vòng 24 - 48h (kể cả thứ 7 và Chủ Nhật) trong nội thành Hà Nội. Việc giao hàng sẽ được tiến hành ngay khi chúng tôi xác nhận được giao dịch. Nếu trong đợt giao hàng đầu tiên Quý khách không có mặt, chúng tôi sẽ gửi
        email (hoặc gọi điện) đến Quý khách để sắp xếp thời gian giao hàng khác thuận tiện hơn. Nếu đợt giao hàng thứ hai bị hoãn với cùng lý do, Quý khách sẽ đến kho hàng của chúng tôi để nhận hàng trong thời gian hoạt động từ 8h30 đến 21h30.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">&nbsp;Tuy hiếm xảy ra nhưng nếu quý khách phát hiện sản phẩm bị khiếm khuyết hay thiếu sản phẩm trong đơn hàng, Quý khách có thể tham khảo quy định đổi trả hàng hoặc liên hệ với chúng tôi qua số điện thoại (04) 3622 8508 hoặc hotline 0986681189, chúng
        tôi cam kết sẽ giải quyết sớm nhất cho Quý khách.</span>
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

export default ShippingPolicy;
