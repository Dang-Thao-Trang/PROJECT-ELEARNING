import React, { useEffect, useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import courseAPI from "../../../services/courseAPI";
import "./Booking.scss";

const Booking = ({ courseId }) => {
  const { data: course } = useRequest(() => courseAPI.getCourseItem(courseId));
  if (!course) {
    return null;
  }
  console.log(course);

  return (
    <div className="booking container-fluid">
      <div className="overlay"></div>
      <div className="row">
        <div className="booking_img col-6">
          <img src={course.hinhAnh} />
        </div>

        <div className="booking_detail col-6">
          <div className="detail_item">
            <span className="detail_title active">
              Tên khoá học:
              <span>{course.tenKhoaHoc}</span>
            </span>
          </div>
          <div className="detail_item">
            <span className="detail_title">
              Chuyên ngành:
              <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
            </span>
          </div>
          <div className="detail_item">
            <span className="detail_title">
              Mô tả:
              <span>{course.moTa}</span>
            </span>
          </div>
          <div className="detail_item">
            <span className="detail_title">
              Lượt xem:
              <span>{course.luotXem}</span>
            </span>
          </div>
          <div className="detail_item">
            <span className="detail_title">
              Ngày tạo:
              <span>{course.ngayTao}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
