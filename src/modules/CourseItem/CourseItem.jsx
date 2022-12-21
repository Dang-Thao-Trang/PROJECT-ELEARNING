import React from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";
import "./Courseltem.scss";

const CourseItem = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div>
      <Booking courseId={courseId} />
      <p className="course_item">
        Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào
        tạo Lập trình chuyên nghiệp từ Zero tại trung tâm. Khóa học 100% thực
        hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm
        việc ngay sau khi học. Phương pháp đào tạo nghề chuẩn đại học Arizona -
        ASU Mỹ - tập trung tư duy, phân tích bài toán giúp cho học viên dễ dàng
        phát triển từ dev lên senior, leader và làm việc tại bất kì môi trường
        nào.
        <h6>Ai có thể tham gia</h6>
        <ul>
          <li>Mới học lập trình, thiếu định hướng & lộ trình học tập</li>
          <li>Trái ngành học lập trình, chuyển nghề</li>
          <li>Yếu tư duy lập trình, mất gốc muốn học để xin việc làm</li>
          <li>
            Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ việc làm của
            dev
          </li>
          <li>Thêm nghề để kiếm thêm thu nhập ngoài giờ</li>
        </ul>
      </p>
    </div>
  );
};

export default CourseItem;
