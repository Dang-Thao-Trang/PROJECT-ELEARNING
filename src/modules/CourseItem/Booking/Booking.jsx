import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import useRequest from "../../../Hooks/useRequest";
import courseAPI from "../../../services/courseAPI";
import "./Booking.scss";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";

const Booking = ({ courseId }) => {
  const { data: course } = useRequest(() => courseAPI.getCourseItem(courseId));
  const { user } = useSelector((state) => state.auth);
  // const MySwal = withReactContent(swal);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const handleSubmit = () => {
    if (user) {
      try {
        (async () => {
          try {
            const data = await courseAPI.getRegister({
              maKhoaHoc: course.maKhoaHoc,
              taiKhoan: user.taiKhoan,
            });
            console.log(123);
          } catch (error) {
            console.log(error);
          }
        })();
        swal({
          title: "Bạn sẽ ghi danh khoá học này?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Đăng ký thành công!", {
              icon: "success",
              button: false,
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      } catch (error) {}
    } else {
      swal({
        icon: "error",
        text: "Bạn chưa đăng nhập vui lòng đăng nhập!!!",
        buttons: ["Không muốn thử", "ok!"],
      }).then((reponse) => {
        if (reponse) {
          navigate(`/signin?redirectUrl=${location.pathname}`);
        }
      });
    }
  };

  if (!course) {
    return null;
  }

  return (
    <div className="booking container-fluid">
      <div className="overlay"></div>
      <div className="row">
        <div className="booking_img col-xs-12 col-sm-6">
          <img src={course.hinhAnh} />
        </div>

        <div className="booking_detail col-xs-12 col-sm-6">
          <div className="detail_item">
            <span className="detail_title active">
              khoá học:
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
          <div className="btn btn-warning" onClick={handleSubmit}>
            Đăng ký ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
