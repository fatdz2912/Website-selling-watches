import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function Genegal() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Quy định chung";
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
            title: "Chính sách & Quy định chung",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
    <p>
    <strong style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255);">Chính sách và quy định chung</strong>
</p>
<p class="ql-align-justify">
    <strong>
        <em>Kính chào Quý khách hàng!</em>
    </strong>
</p>
<p class="ql-align-justify">
    <span style="background-color: rgb(255, 255, 102);">Cô</span>ng ty cổ phần trực tuyến Đăng Quang xin chân thành cảm ơn Quý khách hàng đã tin cậy và sử dụng dịch vụ mua hàng trực tuyến tại website&nbsp;
    <a href="https://dangquangwatch.vn/" target="_blank" style="color: inherit;">J</a>
    <u>omashop.vn</u>&nbsp;
    <span style="background-color: rgb(255, 255, 102);">Chú</span>ng tôi
    <span style="background-color: rgb(255, 255, 102);">&nbsp;cam kết&nbsp;</span>hoạt động thương mại điện tử (TMĐT)&nbsp;tuân thủ theo đúng&nbsp;
    <span style="background-color: rgb(255, 255, 102);">Pháp&nbsp;</span>luật của Nhà nước và vì quyền lợi của người tiêu dùng. Để
    <span style="background-color: rgb(255, 255, 102);">&nbsp;đảm bảo&nbsp;</span>quyền lợi, Quý khách hàng vui lòng đọc kỹ những chính sách bán hàng dưới đây:</p>
<ol>
    <li class="ql-align-justify">
        <strong>Chính sách bán hàng và chất lượng hàng hóa</strong>
    </li>
    <li class="ql-align-justify">
        <strong>Chính sách bảo mật thông tin</strong>
    </li>
    <li class="ql-align-justify">
        <strong>Chính sách vận chuyển, giao nhận hàng hóa</strong>
    </li>
    <li class="ql-align-justify">
        <strong>Chính sách Đổi hàng hóa</strong>
    </li>
    <li class="ql-align-justify">
        <strong>Chính sách Bảo hành sản phẩm</strong>
    </li>
</ol>
<p class="ql-align-justify">
    <strong>
        <em>Lưu ý</em>
    </strong>:</p>
<p class="ql-align-justify">Các chính sách và quy định chung áp dụng trên website này và web thành viên áp dụng từ ngày&nbsp;01/01/2009,&nbsp;
    <span style="background-color: rgb(255, 255, 102);">chú</span>ng tôi sẽ liên tục cập nhật các chính sách bán hàng
    <span style="background-color: rgb(255, 255, 102);">&nbsp;đảm bảo&nbsp;</span>phù hợp với&nbsp;
    <span style="background-color: rgb(255, 255, 102);">Pháp&nbsp;</span>luật của nhà nước, người tiêu dùng, phù hợp hoạt động TMĐT. Do vậy, rất mong Quý khách thường xuyên theo dõi đến các chính sách của&nbsp;
    <span style="background-color: rgb(255, 255, 102);">chú</span>ng tôi.</p>
<p class="ql-align-justify">Mọi chi tiết xin liên hệ:</p>
<p class="ql-align-justify">
    <strong style="background-color: rgb(255, 255, 102);">CÔ</strong>
    <strong>NG TY CỔ PHẦN TRỰC TUYẾN NGÔ VĂN TRỊ</strong>
</p>
<p class="ql-align-justify">
    <strong>Địa chỉ</strong>: 435/53 Trần Cao Vân,Phường Xuân Hà,Quận Thanh Khê,Thành Phố Đà Nẵng</p>
<p class="ql-align-justify">Điện thoại: 0377460815</p>
<p class="ql-align-justify">Thời gian phục vụ:</p>
<ul>
    <li class="ql-align-justify">Từ thứ 2 đến thứ 6: Từ 8h - 21h hàng ngày</li>
    <li class="ql-align-justify">Kể cả thứ 7 và Chủ nhật</li>
</ul>
<p class="ql-align-justify">Email:&nbsp;Ngovantri2912
    <strong>@jomashop.vn</strong>
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

export default Genegal;
