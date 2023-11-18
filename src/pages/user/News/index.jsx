import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function News() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Tin tức";
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
            title: "Tin tức",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
<p>
    <br>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/910/1111-ngay-doc-than-sale-doc-nhat-giam-den-50-tai-dang-quang-watch.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 24px; color: inherit;">11/11 NGÀY ĐỘC THÂN – SALE ĐỘC NHẤT GIẢM ĐẾN 50% TẠI JOMASHOP</a>
</p>
<p>11.11 Ngày Độc Thân, Đăng Quang Watch tung deal hời không thể hấp dẫn hơn cho hàng loạt các sản phẩm giảm giá đến 50%. Chương trình khuyến mãi vô cùng đặc biệt đang chờ bạn khám phá và sắm ngay các...</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/909/thu-chuc-mung-nhan-ngay-phu-nu-viet-nam-2010-dang-quang-watch.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255); color: inherit;">
        <strong>
            <img src="https://www.dangquangwatch.vn/upload/article/chuc-mung-ngay-phu-nu-viet-nam-avatar-1938072339.jpg" alt="tin tuc">
        </strong>
    </a>
</p>
<p>
    <br>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/909/thu-chuc-mung-nhan-ngay-phu-nu-viet-nam-2010-dang-quang-watch.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 20px; color: inherit;">Thư chúc mừng nhân ngày Phụ nữ Việt Nam 20.10 - Đăng Quang Watch</a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/908/2010-gap-doi-yeu-thuong-sale-upto-20-dong-ho-nu-tai-dang-quang-watch.html" target="_blank" style="font-size: 16px; color: inherit;">20/10 – Gấp đôi yêu thương - SALE Upto 20% đồng hồ nữ tại Đăng Quang Watch</a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/907/giam-gia-den-20-dong-ho-jacques-lemans-co-hoi-nhan-ngay-iphone-15-pro-max.html" target="_blank" style="font-size: 16px; color: inherit;">Giảm giá đến 20% đồng hồ Jacques Lemans cơ hội nhận ngay Iphone 15 Pro Max</a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/906/den-dang-quang-watch-nhan-ngay-iphone-15-pro-max.html" target="_blank" style="font-size: 16px; color: inherit;">Đến Đăng Quang Watch – Nhận ngay Iphone 15 Pro Max</a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/905/giam-gia-len-toi-20-cho-thuong-hieu-dong-ho-jacques-lemans.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255); color: inherit;">
        <strong>
            <img src="https://www.dangquangwatch.vn/upload/article/jacques-lemans-sale-20_00-1252175745.jpg" alt="tin tuc">
        </strong>
    </a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/905/giam-gia-len-toi-20-cho-thuong-hieu-dong-ho-jacques-lemans.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 22px; color: inherit;">Giảm giá lên tới 20% cho thương hiệu đồng hồ Jacques Lemans</a>
</p>
<p>Trên thị trường đồng hồ thế giới, có rất nhiều thương hiệu nổi tiếng, nhưng giữa hàng ngàn tên tuổi, Jacques Lemans nổi lên như một ngôi sao sáng trong ngành công nghiệp đồng hồ. Với hơn 40 năm...</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/904/co-hoi-dac-biet-mua-dong-ho-tang-ngay-50-cho-kinh-mat-va-but-ky.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255); color: inherit;">
        <strong>
            <img src="https://www.dangquangwatch.vn/upload/article/tsar-bomba-dong-ho-chinh-hang-2002690688.jpg" alt="tin tuc">
        </strong>
    </a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/904/co-hoi-dac-biet-mua-dong-ho-tang-ngay-50-cho-kinh-mat-va-but-ky.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 22px; color: inherit;">Cơ hội đặc biệt: Mua đồng hồ tặng ngay 50% cho kính mát và bút ký!</a>
</p>
<p>Đừng bỏ lỡ cơ hội đặc biệt này! Bạn đang tìm kiếm một cách để thể hiện phong cách và đẳng cấp của mình? Hãy tham gia ngay vào chương trình khuyến mãi độc đáo này.</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/902/chat-lieu-tao-nen-su-khac-biet-dong-ho-tsar-bomba.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255); color: inherit;">
        <strong>
            <img src="https://www.dangquangwatch.vn/upload/article/tsar-bomba-chat-lieu-tao-len-su-khac-biet_2023-1540515203.jpg" alt="tin tuc">
        </strong>
    </a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/902/chat-lieu-tao-nen-su-khac-biet-dong-ho-tsar-bomba.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 22px; color: inherit;">Chất liệu tạo nên sự khác biệt đồng hồ Tsar Bomba</a>
</p>
<p>Trong thế giới đồng hồ hạng sang, sự kết hợp giữa nghệ thuật và kỹ thuật tạo nên những tác phẩm độc đáo, ý nghĩa. Đồng hồ Tsar Bomba - tác phẩm độc đáo không chỉ về thiết kế mà còn ở...</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/901/dong-ho-tsar-bomba-suc-manh-bung-no.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 26px; background-color: rgb(255, 255, 255); color: inherit;">
        <strong>
            <img src="https://www.dangquangwatch.vn/upload/article/tsar-bomba-dong-ho-chinh-hang-1408635904.jpg" alt="tin tuc">
        </strong>
    </a>
</p>
<p>
    <a href="https://www.dangquangwatch.vn/tin-tuc/901/dong-ho-tsar-bomba-suc-manh-bung-no.html" target="_blank" style="font-family: HelveticaNeueB; font-size: 22px; color: inherit;">Đồng Hồ Tsar Bomba: Sức mạnh bùng nổ</a>
</p>
<p class="ql-align-justify">Trong thế giới đồng hồ hạng sang, sự kết hợp giữa nghệ thuật và kỹ thuật đã tạo nên những tác phẩm độc đáo đầy ý nghĩa. Một ví dụ xuất sắc về sự kết hợp này chính là đồng hồ Tsar...</p>
  `,
        }}
      ></div>
    </>
  );
}

export default News;
