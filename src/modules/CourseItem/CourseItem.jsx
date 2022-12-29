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
      <div className="course_des container-fluid">
        <h5>LỢI ÍCH KHI BẠN THAM GIA KHOÁ HỌC TẠI CYBERSOFT</h5>
        <p>
          Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình
          đào tạo Lập trình chuyên nghiệp từ Zero tại trung tâm. Khóa học 100%
          thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ
          trợ tìm việc ngay sau khi học. Phương pháp đào tạo nghề chuẩn đại học
          Arizona - ASU Mỹ - tập trung tư duy, phân tích bài toán giúp cho học
          viên dễ dàng phát triển từ dev lên senior, leader và làm việc tại bất
          kì môi trường nào.
        </p>
        <h6 className="fw:900">Ai có thể tham gia?</h6>
        <ul>
          <li>Mới học lập trình, thiếu định hướng & lộ trình học tập</li>
          <li>Trái ngành học lập trình, chuyển nghề</li>
          <li>Yếu tư duy lập trình, mất gốc muốn học để xin việc làm</li>
        </ul>
        <h6>Khi kết thúc khoá học?</h6>
        <ul>
          <li>
            Có thể apply ngay vào Fresher, Junior với mức lương khởi điểm từ
            7tr5 đến 15tr
          </li>

          <li>Làm việc tại công ty, tập đoàn trong nước và nước ngoài...</li>
          <li>Tự startup - khởi nghiệp</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;
