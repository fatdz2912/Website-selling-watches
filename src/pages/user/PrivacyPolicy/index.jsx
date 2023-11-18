import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function PrivaryPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Chính sách bảo mật";
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
            title: "Chính sách bảo mật",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
 <p class="ql-align-justify">
    <strong style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255);">Chính sách bảo mật</strong>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">jomashop cam kết sẽ bảo mật những thông tin mang tính riêng tư của khách hàng. Quý khách vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập:</span>
</p>
<h2 class="ql-align-justify">
    <strong>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mục đích và phạm vi thu thập:</strong>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Để truy cập và sử dụng một số dịch vụ tại&nbsp;dangquangwatch.vn, quý khách có thể được yêu cầu đăng ký với chúng tôi thông tin cá nhân (thành viên), bao gồm: Email, Họ tên, số ĐT liên lạc, địa chỉ, tên đăng nhập, mật khẩu.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Chúng tôi cũng thu thập thông tin về số lần viếng thăm, bao gồm số trang quý khách xem, số links (liên kết) bạn click, những thông tin khác liên quan đến việc kết nối đến Donghodangquang.com và các thông tin mà trình duyệt Web (Browser) quý khách
        sử dụng mỗi khi truy cập vào website&nbsp;</span>
    <u style="font-family: arial; font-size: small;">http://www.dangquangwatch.vn/</u>
    <span style="font-family: arial; font-size: small;">, gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất đến.</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phạm vi sử dụng thông tin:</strong>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Các thông tin thu thập thông qua website&nbsp;dangquangwatch.vn&nbsp;sẽ giúp chúng tôi:</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hỗ trợ khách hàng khi mua sản phẩm;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Giải đáp thắc mắc khách hàng;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cung cấp cho bạn thông tin mới nhất trên Website của chúng tôi;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Xem xét và nâng cấp nội dung và giao diện của Website;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thực hiện các bản khảo sát khách hàng;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thực hiện các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ của Đồng hồ Đăng Quang.</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong style="font-family: arial; font-size: small;">3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thời gian lưu trữ thông tin:</strong>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân Thành viên sẽ được bảo mật trên máy chủ của Đăng Quang Watch</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</strong>
</h2>
<p class="ql-align-justify">
    <strong style="font-family: arial; font-size: small;">Công ty Cổ phần Trực tuyến Ngô Văn Trị</strong>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Địa chỉ: 435/53 Trần Cao Vân, Phường Xuân Hà,Quận Thanh Khê,Thành Phố Đà Nẵng</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Tel: 024.36228508</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Email:&nbsp;</span>
    <a href="mailto:sieuthidangquang@gmail.com" target="_blank" style="font-family: arial; font-size: small; color: inherit;">sieuthidangquang@gmail.com</a>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình:</strong>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu Đồng hồ Đăng Quang thực hiện
        việc này;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thành viên có quyền gửi khiếu nại về người bán đến Ban quản trị của Đồng hồ Đăng Quang tại địa chỉ sieuthidangquang@gmail.com . Khi tiếp nhận những phản hồi này, Đồng hồ Đăng Quang sẽ xác nhận lại thông
        tin, trường hợp đúng như phản ánh của Thành viên tùy theo mức độ, Đồng hồ Đăng Quang sẽ có những biện pháp xử lý kịp thời.</span>
</p>
<p class="ql-align-justify">
    <br>
</p>
<h2 class="ql-align-justify">
    <strong>6.&nbsp;&nbsp;&nbsp;&nbsp;</strong>
    <strong style="font-family: arial; font-size: small;">Cam kết bảo mật thông tin cá nhân khách hàng:</strong>
</h2>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thông tin cá nhân của Thành viên trên Donghodangquang.com được chúng tôi cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của Đồng hồ Đăng Quang. Việc thu thập và sử dụng thông tin
        của mỗi Thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ ba nào về thông tin cá nhân của Thành viên khi không có sự cho phép đồng ý từ Thành viên;</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân Thành viên, Đồng hồ Đăng Quang sẽ có trách nhiện thông báo vụ việc cho cơ quan chức năng điều tra xử lý
        kịp thời và thông báo cho Thành viên được biết.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Thành viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ liệu trung tâm an toán cấp 1 của Đồng hồ Đăng Quang.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ban quản trị Đồng hồ Đăng Quang yêu cầu các cá nhân khi đăngkí/mua hàng là Thành viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan như: họ và tên, địa chỉ liên lạc, email, số thẻ thanh toán,
        … và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản trị Đồng hồ Đăng Quang không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của Thành viên đó nếu xét thấy tất cả thông tin cá nhân của
        Thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ban quản trị khuyến cáo Thành viên nên bảo mật các thông tin liên qua đến mật khẩu truy xuất của mình và không nên chia sẻ với bất kỳ người nào khác. Nếu sử dụng máy tính chung nhiều người, Thành
        viên nên đăng xuất, hoặc thoát hết tất cả các cửa sổ Website đang mở.</span>
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

export default PrivaryPolicy;
