import { Breadcrumb, Space } from "antd";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  useEffect(() => {
    document.title = "Liên hệ";
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
            title: "Liên hệ",
          },
        ]}
      />
      <div
        style={{ backgroundColor: "#fff", marginTop: "15px", padding: "16px" }}
        dangerouslySetInnerHTML={{
          __html: `
    <h4 class="ql-align-center">HỆ THỐNG CỬA HÀNG</h4>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-au-co-tan-binh.jpg" alt="dong-ho-hai-trieu-au-co-tan-binh" height="680" width="1000">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;160 Âu Cơ, P.9, Q.Tân Bình – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.758943,106.690662,11z/data=!4m2!3m1!1s0x0:0x80ba8fa7c7742f17?hl=en-US" target="_blank" style="background-color: transparent; color: rgb(103, 103, 103);">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Seiko, Fossil, OP, Candino, Skagen, Koi</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-au-co-tan-binh-199.jpg" height="680" width="1000">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;199 Âu Cơ, P.5, Q.11 – TPHCM (
    <a href="https://goo.gl/maps/VfbrBGtqq2qZrPB17" target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Frederique Constant, Rado, Tissot, Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Koi</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-tran-quang-kha.jpg" alt="dong-ho-hai-trieu-tran-quang-kha" height="666" width="980">
</p>
<p>Chi Nhánh:&nbsp;190D Trần Quang Khải, P.Tân Định, Q.1 – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.791395,106.688828,16z/data=!4m13!1m7!3m6!1s0x317528cd6e515bf7:0x46d7a5e064a321e1!2zMTkwIFRy4bqnbiBRdWFuZyBLaOG6o2ksIFTDom4gxJDhu4tuaCwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!3b1!8m2!3d10.79166!4d106.68903!3m4!1s0x317528cd68a03e93:0xe0e48cc86ed3f582!8m2!3d10.791525!4d106.6888192"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Citizen, Casio, Orient, Daniel Wellington, Saga, Seiko, Fossil, OP, Candino, Skagen, Michael Kors, Koi</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-tran-quang-kha-156.jpg" alt="dong-ho-hai-trieu-tran-quang-kha 156" height="680" width="1000">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;156A Trần Quang Khải, P.Tân Định, Q.1 – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u+-+H%C3%B3c+M%C3%B4n/@10.865062,106.613621,15z/data=!4m5!3m4!1s0x0:0xab0bc6a7dd7fdfc!8m2!3d10.865062!4d106.613621?hl=vi"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Rado, Frederique Constant, Certina, Tissot, CK, Saga, Koi</p>
<p>
    <a href="https://youtu.be/I-adwxrVHx4" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-nguyen-anh-thu.jpg" alt="dong-ho-hai-trieu-nguyen-anh-thu" height="680" width="1000">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;92/2 Nguyễn Ảnh Thủ, Trung Chánh, Tân Xuân, Hóc Môn – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u+-+H%C3%B3c+M%C3%B4n/@10.865062,106.613621,15z/data=!4m5!3m4!1s0x0:0xab0bc6a7dd7fdfc!8m2!3d10.865062!4d106.613621?hl=vi"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Seiko, Fossil, OP, Candino, Skagen, Koi</p>
<p>
    <a href="https://youtu.be/916UZQlYkDs" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-chi-nhanh-676.jpg" alt="dong-ho-hai-trieu-chi-nhanh-676" height="476" width="700">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;676 Lê Trọng Tấn, P.Bình Hưng Hòa, Q.Bình Tân – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.8144,106.6034843,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc09bad7141cbd400!8m2!3d10.8144!4d106.605673"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, Saga, Seiko, Fossil, Koi</p>
<p>
    <a href="https://youtu.be/t7yMzrdgz_I" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-chi-nhanh-560.jpg" alt="dong-ho-hai-trieu-chi-nhanh-560" height="476" width="700">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;560 Tỉnh Lộ 10, P.Bình Trị Đông, Q.Bình Tân – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.7575167,106.6164903,18.25z/data=!4m5!3m4!1s0x0:0x5d5cec3501dea8fb!8m2!3d10.7576998!4d106.6164766?hl=vi"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, Saga, Seiko, Fossil, OP, Koi</p>
<p>
    <a href="https://youtu.be/WgIpGLjnm9U" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-phan-van-tri-g.jpg" height="680" width="1000">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;713 Phan Văn Trị, P.7, Q.Gò Vấp – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.8278831,106.6841626,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc9a14592ef132d35!8m2!3d10.8278831!4d106.6863513"
    target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Seiko, Fossil, Koi</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/showroom-phan-huy-ich-hai-trieu.jpg" alt="showroom-phan-huy-ich-hai-trieu" height="476" width="700">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;46b Phan Huy Ích, Q.Tân Bình – TPHCM (
    <a href="https://www.google.com/maps/place/%C4%90%E1%BB%93ng+H%E1%BB%93+H%E1%BA%A3i+Tri%E1%BB%81u/@10.8262773,106.6289234,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbd6410de00aefc5a!8m2!3d10.8262773!4d106.6311121"
    target="_blank" style="background-color: transparent; color: rgb(103, 103, 103);">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Seiko, Fossil, Koi</p>
<p>
    <a href="https://www.youtube.com/watch?v=PJfx_gkY5EA" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/showroom-nguyen-thi-dinh.jpg" alt="showroom-nguyen-thi-dinh" height="476" width="700">
</p>
<p>
    <br>
</p>
<p>Chi Nhánh:&nbsp;12b Nguyễn Thị Định, P.An Phú, Q.2 – TPHCM (
    <a href="https://goo.gl/maps/Y4GiSUBnRS45u6LC7" target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Tissot, Citizen, Casio, Orient, Daniel Wellington, SR, Saga, Seiko, Fossil, Koi</p>
<p>
    <br>
</p>
<p>
    <img src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/dong-ho-hai-trieu-thu-duc.jpg" height="680" width="1000">
</p>
<p>Chi Nhánh:&nbsp;957 Kha Vạn Cân, P.Linh Tây, Q.Thủ Đức – TPHCM (
    <a href="https://www.google.com/maps?ll=10.861357,106.760985&amp;z=12&amp;t=m&amp;hl=en&amp;gl=US&amp;mapclient=embed&amp;cid=15854372236066841403" target="_blank" style="color: rgb(255, 102, 0); background-color: transparent;">Xem Bản Đồ</a>)</p>
<p>ĐT:&nbsp;1900.6777</p>
<p>Mail:&nbsp;lienhe@donghohaitrieu.com</p>
<p>Bán Các Hãng:&nbsp;Doxa, Longines, Frederique Constant, Bulova, Tissot, Citizen, Casio, Orient, Daniel Wellington, OP, Saga, Seiko, Fossil, Koi</p>
<p>
    <a href="https://youtu.be/ZjSber2Y1PM" target="_blank" style="color: rgb(216, 49, 49); background-color: transparent;">Xem Video Giới Thiệu Toàn Cảnh Showroom</a>
</p>
  `,
        }}
      ></div>
    </>
  );
}

export default Contact;
