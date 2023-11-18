import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "Giới thiệu";
    window.scrollTo({
      top: 0,
    });
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
            title: "Giới thiệu",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
    <p class="ql-align-justify">JOMASHOP nhà nhập khẩu đồng hồ chính hãng Thụy Sỹ
    <span style="font-family: Arial; font-size: 14px; background-color: rgb(255, 255, 255);">&nbsp;</span>Tên công ty:&nbsp;
    <strong>CÔNG TY CỔ PHẦN TRỰC TUYẾN NGÔ VĂN TRỊ</strong>
</p>
<p class="ql-align-justify">Tên giao dịch tiếng Anh: NVT ONLINE .,JSC</p>
<p class="ql-align-justify">Trụ sở chính: 435.53 Trần Cao Vân, Phường Xuân Hà, Quận Thanh Khê,Thành Phố Đà Nẵng</p>
<p class="ql-align-justify">Giấy CNĐKKD và MSDN số:&nbsp;
    <span style="font-family: arial, helvetica, sans-serif; color: rgb(0, 26, 51);">0104938104 Sở Kế Hoạch và Đầu Tư Thành Phố Đà Nẵng cấp ngày 07 tháng 10 năm 2010; Đăng ký thay đổi lần 14 ngày 29 tháng 12 năm 2021</span>
</p>
<p class="ql-align-justify">Đại diện theo pháp luật của doanh nghiệp: Ông Ngô Văn Trị&nbsp;– Giám đốc</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">
    <strong>1. Quá trình hình thành và phát triển:</strong>
</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">
    <strong>
        <u>JOMASHOP&nbsp;</u>
    </strong>tiền thân là Siêu thị Đăng Quang được thành lập vào năm 2008. Ra đời trong thời điểm kinh doanh qua internet tại Việt Nam còn non trẻ, thị trường còn khó khăn.&nbsp;</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Trong quá trình phát triển, Đăng Quang Watch mở rộng hoạt động kinh doanh đa dạng hơn là kênh phân phối, bán lẻ các thương hiệu đồng hồ danh tiếng. Khách hàng luôn luôn tin tưởng sử dụng sản phẩm và dịch vụ được cung cấp bởi Đăng Quang Watch. Qua đó,
    Đăng Quang Watch&nbsp;luôn duy trì được tốc độ tăng trưởng cao, toàn diện về mọi mặt một cách bền vững so với các công ty kinh doanh cùng lĩnh vực.</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Với nền tảng vững chắc, Công ty Cổ phần Trực tuyến Đăng Quang được thành lập theo quyết định số 0104938104 Sở Kế hoạch &amp; Đầu tư thành phố Hà Nội cấp ngày 07 tháng 10 năm 2010, tên giao dịch tiếng Anh là Dang Quang Online .,Jsc, chính thức đặt nền
    móng xây dựng trở&nbsp;thành công ty phân phối, bán lẻ đồng hồ hàng đầu Việt Nam. Và website dangquangwatch.vn của Công ty Cổ phần Trực tuyến Đăng Quang đã trở thành địa chỉ quen thuộc của mọi người khi muốn tìm mua cho mình những sản phẩm đồng hồ
    hàng hiệu cao cấp.</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Công ty có đội ngũ nhân viên trẻ nhưng am hiểu sâu sắc về nghiệp vụ, chuyên môn cao, đủ khả năng để có thể đáp ứng mọi yêu cầu dù khắt khe nhất của khách hàng. Không những thế, đội ngũ nhân viên của Đăng QuangWatch còn là những người đầy lòng nhiệt tình
    và có thái độ niềm nở trong cung cách phục vụ khách hàng.&nbsp;</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Đăng Quang Watch cam kết duy trì mối quan hệ đối tác lâu dài, tận tụy với khách hàng. Sự thành công của khách hàng cũng là sự thành công của chúng tôi.</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">
    <strong>2. Mục tiêu với đối tác:</strong>
</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Hiện nay, Đăng QuangWatch đang phân phối các thương hiệu đồng hồ danh tiếng trên thế giới như:&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Dong-ho-Tourbillon-Memorigin/553-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Tourbillon Memorigin</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Stuhrling-Original-Swiss/556-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Stuhrling Original</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Dong-ho-Diamond-D/557-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Diamond D</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Bruno-Sohnle-Glashutte/560-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Bruno Sohnle Glashutte</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Dong-ho-Atlantic-Swiss/559-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Atlantic Swiss</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Dong-ho-Epos-Swiss/563-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Aries Gold</a>,&nbsp;
    <a href="http://www.dangquangwatch.vn/sp/Dong-ho-Epos-Swiss/563-0-0-0-0-0-0.html" target="_blank" style="color: inherit;">Epos Swiss</a>...</p>
<p class="ql-align-justify">&nbsp;</p>
<p class="ql-align-justify">Với mục tiêu hàng hóa phục vụ đa dạng, mẫu mã mới nhất, chất lượng tốt nhất, giá cả cạnh tranh nhất, Đăng QuangWatch hiểu được tầm quan trọng của việc xây dựng các mối quan hệ và đạt được sự ủng hộ của những nhà cung cấp, những đối tác hàng đầu thế giới.</p>
<p
class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">Đăng QuangWatch mong muốn tìm kiếm những đối tác tiềm năng có khả năng cũng cấp những mẫu đồng hồ mới nhất để thiết lập mối quan hệ hợp tác trong tinh thần tất cả các bên cùng có lợi và cùng phát triển.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">Thành công của khách hàng là tương lai của công ty.&nbsp;Những yếu tố trên luôn gắn liền với truyền thống, uy tín và thương hiệu của Công ty Cổ phần&nbsp;Trực tuyến Đăng Quang trên thị trường Việt Nam cũng như với quốc tế.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">
        <strong>3. Tầm nhìn:</strong>
    </p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Trở thành công ty có hệ thống showroom đồng hồ quy mô, chuyên nghiệp và thân thiện lớn nhất Việt Nam.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Xây dựng Đăng QuangWatch trở thành môi trường làm việc chuyên nghiệp, nơi mà mọi cá nhân có thể phát huy tối đa sức sáng tạo, khả năng lãnh đạo và cơ hội làm chủ thực sự bản thân.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Xây dựng Đăng QuangWatch trở thành một ngôi nhà chung thực sự cho tất cả CB-NV trong công ty bằng việc cùng nhau chia sẻ quyền lợi, trách nhiệm và nghĩa vụ một cách công bằng và minh bạch nhất.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">
        <strong>4. Giá trị cốt lõi:</strong>
    </p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Khách hàng là trọng tâm</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Uy tín</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Chất lượng</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Trung thực</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Hiệu quả</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Phát triển con người</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Tạo sự khác biệt.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">
        <strong>5. Triết lý kinh doanh:</strong>
    </p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Chất lượng sản phẩm và dịch vụ: Là yếu tố tạo nên sự phát triển bền vững của doanh nghiệp.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Phương châm hành động: Dám nghĩ, dám làm, dám chịu trách nhiệm.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Chăm sóc khách hàng: Xây dựng niềm tin bền vững để trở thành đối tác tin cậy và chuyên nghiệp nhất.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Yếu tố rủi ro: Luôn luôn nằm trong tầm kiểm soát.</p>
    <p class="ql-align-justify">&nbsp;</p>
    <p class="ql-align-justify">• Ý thức, tinh thần, trách nhiệm của CB-NV: Phát huy tinh thần thân ái, đoàn kết, hợp lực giữa cán bộ công nhân viên tạo thành một tập thể vững mạnh.</p>
    <p class="ql-align-justify">
        <em>(Lưu ý: Ngoài các hệ thống cửa hàng trên hệ thống đều không&nbsp;phải showroom Đăng Quang&nbsp;quản lý nên các chế độ bảo hành hoặc khuyến mại sẽ không&nbsp;có)</em>
    </p>
    <ul>
        <li>Bài viết khác</li>
    </ul>
    <p class="ql-align-justify">
        <br>
    </p>
  `,
        }}
      ></div>
    </>
  );
}

export default About;
