import { FaStar } from "react-icons/fa";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { Button, Col, Form, Input, Rate, Space } from "antd";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createReviewRequest,
  getReviewListRequest,
} from "redux/slicers/review.slice";

import * as S from "./style";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
function Review({ id, averageRate }) {
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  dayjs.locale("vi");

  const [reviewForm] = Form.useForm();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(getReviewListRequest({ productId: id }));
  }, []);

  const handleReviewProduct = (values) => {
    dispatch(
      createReviewRequest({
        data: {
          ...values,
          userId: userInfo.data.id,
          productId: id,
        },
        callback: () => reviewForm.resetFields(),
      })
    );
  };

  const renderReviewForm = useMemo(() => {
    if (userInfo.data.id) {
      const isReviewed = reviewList.data.some(
        (item) => item.userId === userInfo.data.id
      );
      if (isReviewed) {
        return (
          <S.ReviewFormWrapper>
            Bạn đã đánh giá sản phẩm này
          </S.ReviewFormWrapper>
        );
      }
      return (
        <S.ReviewFormWrapper>
          <Form
            form={reviewForm}
            name="loginForm"
            layout="vertical"
            initialValues={{
              rate: 0,
              comment: "",
            }}
            onFinish={(values) => handleReviewProduct(values)}
          >
            <Form.Item
              label="Đánh giá sao"
              name="rate"
              rules={[{ required: true, message: "Đánh giá sao là bắt buộc" }]}
            >
              <Rate />
            </Form.Item>

            <Form.Item
              label="Nhận xét"
              name="comment"
              rules={[{ required: true, message: "Nhận xét là bắt buộc" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Gửi
            </Button>
          </Form>
        </S.ReviewFormWrapper>
      );
    }
    return (
      <S.ReviewFormWrapper>
        <Link to={ROUTES.LOGIN}>Đăng nhập để đánh giá</Link>
      </S.ReviewFormWrapper>
    );
  }, [userInfo.data, reviewList.data]);

  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <S.ReviewItemWrapper key={item.id}>
          <Space>
            <S.avatar>
              <img src={item.user.avatar} alt="avatarUser" />
            </S.avatar>
            <S.Title>{item.user.fullName}</S.Title>
            <S.Text>{dayjs(item.createdAt).fromNow()}</S.Text>
          </Space>
          <Rate
            value={item.rate}
            disabled
            style={{ display: "block", fontSize: 12 }}
          />
          <S.Comment>{item.comment}</S.Comment>
        </S.ReviewItemWrapper>
      );
    });
  }, [reviewList.data]);
  return (
    <S.ReviewWrapper gutter={[16, 16]}>
      <S.ReviewHead md={24} xs={24}>
        ĐÁNH GIÁ SẢN PHẨM
      </S.ReviewHead>
      <Col xs={6} md={6} xl={6}>
        <S.RatingOverviewScore>
          <S.RatingOverview>{averageRate}</S.RatingOverview>
          <S.RatingPeak> trên 5</S.RatingPeak>
        </S.RatingOverviewScore>
        <S.Stars>
          <Rate value={averageRate} allowHalf disabled />
        </S.Stars>
      </Col>
      <Col xs={18} md={18} xl={18}>
        <S.SearchOfOverview>
          <S.QuantityComment>Bình luận(?)</S.QuantityComment>
          <S.ImageAndVideo>Hình Ảnh/Video(?)</S.ImageAndVideo>
        </S.SearchOfOverview>
      </Col>
      <Col md={24} xs={24}>
        {renderReviewForm}
      </Col>
      <Col md={24} xs={24}>
        {renderReviewList}
      </Col>
    </S.ReviewWrapper>
  );
}

export default Review;
