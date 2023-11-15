import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function Maintenance() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Maintenance Page";
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
            title: "Chính sách bảo hành",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
  <h2 class="ql-align-justify">
    <span style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255);">Chính sách bảo hành</span>
</h2>
<h2 class="ql-align-justify">
    <strong>1. Địa chỉ Trung tâm bảo hành của&nbsp;JOMASHOP:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Hà Nội: Số 552 Trần Đăng Ninh, Quận Cầu Giấy, Hà Nội | Tel:&nbsp;024.3793.9481</li>
    <li class="ql-align-justify">Đà Nẵng:&nbsp;Số 132 Trưng Nữ Vương , P Bình Thuận, Q.Hải Châu, Đà Nẵng |&nbsp;0236.3737.379</li>
    <li class="ql-align-justify">Hồ Chí Minh:&nbsp;Số 423 Trần Hưng Đạo - Phường1- Quận 5 - TP. HCM&nbsp;| Tel:&nbsp;0286.29.89.666</li>
</ol>
<h2 class="ql-align-justify">
    <strong>2.&nbsp;Thời gian nhận và trả bảo hành:</strong>
</h2>
<p class="ql-align-justify">v&nbsp;Tại trung tâm bảo hành: Từ 8h30 đến 17h00 các ngày trong tuần (trừ chủ nhật và các ngày lễ, Tết).</p>
<p class="ql-align-justify">v&nbsp;Tại các hệ thống 100 cửa hàng Đăng Quang Watch trên toàn quốc tất cả các ngày trong tuần kể cả ngày lễ và chủ nhật, từ 8h30 đến 21h</p>
<h2 class="ql-align-justify">
    <strong>3. Chính sách bảo hành:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Đồng hồ được bảo hành từ 1-10 năm kể từ ngày mua theo quy định của hãng sản xuất (tùy từng hãng sẽ có thời gian bảo hành khác nhau).</li>
</ol>
<h2 class="ql-align-justify">
    <strong>4. Phạm</strong>&nbsp;
    <strong>vi tiếp nhận đồng hồ bảo hành và sửa chữa:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Đăng Quang Watch tiếp nhận bảo hành và sửa chữa đối với tất cả các sản phẩm được mua tại hệ thống&nbsp;Đăng Quang&nbsp;Watch.</li>
    <li class="ql-align-justify">Những sản phẩm mang thương hiệu mà&nbsp;Đăng Quang&nbsp;Watch là nhà phân phối độc quyền tại Việt Nam cũng sẽ tiếp nhận bảo hành và sửa chữa.</li>
    <li class="ql-align-justify">Ngoài những trường hợp nêu trên,&nbsp;Đăng Quang&nbsp;Watch sẽ tiếp nhận đồng hồ để bảo hành hoặc sửa chữa cho quý khách hàng.</li>
</ol>
<h2 class="ql-align-justify">
    <strong>5. Điều kiện để đồng hồ được bảo hành miễn phí và cách tính phí đối với đồng hồ sửa chữa:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Nếu đồng hồ mua tại&nbsp;Đăng Quang&nbsp;Watch và còn trong thời gian bảo hành, khách hàng phải xuất trình được những giấy tờ liên quan đến sản phẩm như sổ bảo hành hoặc hóa đơn mua hàng…, khách hàng sẽ được bảo hành miễn phí theo như quy định của
        hãng sản xuất.</li>
    <li class="ql-align-justify">Nếu đồng hồ hết thời gian bảo hành hoặc Khách hàng không mang theo giấy tờ cần thiết liên quan đến sản phẩm thì Khách hàng sẽ mất phí sửa chữa.</li>
</ol>
<h2 class="ql-align-justify">
    <strong>6. Phạm vi bảo hành đồng hồ:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Đăng Quang&nbsp;Watch chỉ bảo hành các lỗi kỹ thuật về máy (như đồng hồ không chạy, chạy không chính xác), độ chịu nước và pin đồng hồ.</li>
    <li class="ql-align-justify">Nếu đồng hồ gặp các vấn đề về lỗi kỹ thuật như đồng hồ không chạy hoặc chạy không chính xác, hơi nước trên mặt đồng hồ, dây hoặc vỏ đồng hồ bị bong tróc hoặc phai lớp mạ, các lỗi kỹ thuật khác bắt nguồn từ sản phẩm thì&nbsp;Đăng Quang&nbsp;Watch sẽ
        trực tiếp kiểm tra và đổi mới sản phẩm cho Khách hàng nếu nghiêm trọng.</li>
</ol>
<h2 class="ql-align-justify">
    <strong>7. Các trường hợp không nằm trong phạm vi bảo hành:</strong>
</h2>
<ol>
    <li class="ql-align-justify">Các lỗi về vỏ và dây của đồng hồ như bong tróc hoặc phai lớp mại, ố mặt số…</li>
    <li class="ql-align-justify">Các lỗi rơi vỡ, va đập làm xước kính trong quá trình Khách hàng sử dụng gây ra.</li>
    <li class="ql-align-justify">Dây da bị gẫy, nứt hoặc bong.</li>
    <li class="ql-align-justify">Không bảo hành cho trường hợp điều chỉnh, sử dụng không đúng cách của người dùng.</li>
    <li class="ql-align-justify">Không bảo hành cho đồng hồ đã sửa chữa tại những nơi không phải là trung tâm bảo hành của&nbsp;Đăng Quang&nbsp;Watch.</li>
</ol>
<p class="ql-align-justify">
    <span style="font-size: small;">Trong thời gian sử dụng nếu gặp bất kỳ trục trặc nào Khách hàng có thể liên hệ trực tiếp với Trung tâm bảo hành của Hãng hoặc phòng CSKH của Công ty Cổ phần Trực tuyến Đăng Quang để được trợ giúp theo số điện thoại: 04.3622.8508 – 0986.68.1189</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Chúng tôi cam kết bảo hành một cách trung thực nhất đảm bảo quyền lợi cho Quý khách, xin Quý khách vui lòng đọc kỹ các quy định bảo hành ghi ở mặt sau phiếu trước khi thực hiện bảo hành sản phẩm.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">Lưu ý:</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Khách hàng chịu trách nhiệm cho chi phí vận chuyển đến Trung tâm bảo hành.</span>
</p>
<p class="ql-align-justify">
    <span style="font-family: arial; font-size: small;">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hết thời hạn bảo hành, chi phí sửa chữa sẽ được trung tâm bảo hành hỗ trợ với giá ưu đãi nhất.</span>
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

export default Maintenance;
