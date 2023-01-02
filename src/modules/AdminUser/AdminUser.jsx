import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { logout, signin } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authAPI from "../../services/authApi";
import Table from "react-bootstrap/Table";

import "./AdminUser.scss";
import courseAPI from "../../services/courseAPI";

const AdminUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);
  const [useUpdate, setUseUpdate] = useState([]);
  const [detailCourse, setDetailCourse] = useState([]);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    mode: "onTouched",
  });

  //  cập nhật tài khoản
  const onSubmit = (values) => {
    (async () => {
      try {
        const data = await authAPI.updateUserClient(values);
        setUseUpdate(data);
        dispatch(
          signin({ taiKhoan: values.taiKhoan, matKhau: values.matKhau })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };

  // List khoá học ghi danh
  const registerDetail = async () => {
    try {
      const { chiTietKhoaHocGhiDanh, ...data } = await authAPI.getUserInfo();
      reset({ ...data });
      setDetailCourse(chiTietKhoaHocGhiDanh);
      console.log(chiTietKhoaHocGhiDanh);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // xoá kkhoá học ghi danh
  const handleDelete = async (maKhoaHoc) => {
    try {
      const data = await courseAPI.getDeleteRegister({
        maKhoaHoc: maKhoaHoc,
        taiKhoan: user.taiKhoan,
      });
      registerDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerDetail();
  }, []);

  // đăng xuất
  const onLogOut = () => {
    dispatch(logout());
    navigate("/signin");
  };

  const seenCourse = () => {
    navigate("/");
  };
  const { errors } = formState;

  return (
    <div className="bg-warning mt-5 admin">
      <div className="container-fluid user_update">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)} className="col-12 col-sm-8">
            <h3 className="admin_title">Thông tin của bạn</h3>

            <div className="account my-3 px-4 input-group">
              <input
                {...register("taiKhoan")}
                className="form-control input"
                placeholder="Tài khoản"
                type="text"
                // input="text"
                disabled
              />
            </div>
            <div className="password my-3 px-4 input-group">
              <input
                className="form-control input"
                placeholder="Mật khẩu"
                // type="password"
                input="password"
                {...register("matKhau", {
                  required: { value: true, message: "Mật khẩu không để trống" },
                  minLength: { value: 5, message: "Mật khẩu từ 5-20 ký tự" },
                  maxLength: { value: 20, message: "Mật khẩu từ 5-20 ký tự" },
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                    message:
                      "Mật khẩu có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số",
                  },
                })}
              />
            </div>
            <div className="w-100 text-danger">
              {errors?.matKhau && <span>{errors?.matKhau?.message}</span>}
            </div>
            <div className="account my-3 px-4 input-group">
              <input
                className="form-control input"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không để trống",
                  },
                  minLength: { value: 5, message: "email từ 5-20 ký tự" },
                  maxLength: {
                    value: 20,
                    message: "email khoản từ 5-20 ký tự",
                  },
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "email không đúng định dạng",
                  },
                })}
              />
            </div>
            <div className="w-100 text-danger">
              {errors?.email && <span>{errors?.email?.message}</span>}
            </div>
            <div className="account my-3 px-4 input-group">
              <input
                className="form-control input"
                placeholder="Số điện thoại"
                {...register("soDT", {
                  required: {
                    value: true,
                    message: "Số điện thoại không để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Số điện thoại từ 5-11 ký tự",
                  },
                  maxLength: {
                    value: 11,
                    message: "Số điện thoại từ 5-11 ký tự",
                  },
                })}
              />
            </div>
            <div className="w-100 text-danger">
              {errors?.soDT && <span>{errors?.soDT?.message}</span>}
            </div>
            <div className="account my-3 px-4 input-group">
              <input
                className="form-control input "
                placeholder="Họ tên"
                {...register("hoTen", {
                  required: {
                    value: true,
                    message: "*Họ và tên không để trống",
                  },
                  minLength: { value: 5, message: "Họ và tên từ 5-30 ký tự" },
                  maxLength: { value: 30, message: "Họ và tên từ 5-30 ký tự" },
                })}
              />
            </div>
            <div className="w-100 text-danger">
              {errors?.hoTen && <span>{errors.hoTen.message}</span>}
            </div>
            <div className="text-center footer_form">
              <button
                disabled={loading}
                className="btn update btn-warning my-1"
              >
                Cập nhật
              </button>
            </div>
          </form>
          <div className="col-sm-4 img">
            <img
              src="https://anhdephd.vn/wp-content/uploads/2022/06/anh-may-tinh-va-laptop-nen-toi.jpg"
              alt="ảnh minh hoạ"
              style={{ with: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Danh sách khoá học ghi danh*/}
      <div className="registered">
        <h4 className="regis_title">Khoá học bạn đã ghi danh</h4>
        <div className="container-fluid regis_list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Khoá Học</th>
                <th>Mô tả</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tbody">
              {detailCourse.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.tenKhoaHoc}</td>
                  <td className="des">
                    {item.moTa.length > 100
                      ? item.moTa.substring(0, 300) + "..."
                      : item.moTa}
                  </td>
                  <td>
                    <div>
                      <button
                        className="btn btn-light"
                        onClick={() => navigate(`/course/${item.maKhoaHoc}`)}
                      >
                        Xem khoá học
                      </button>
                      <button
                        onClick={() => handleDelete(item.maKhoaHoc)}
                        className="btn btn-danger btn_delete"
                      >
                        Huỷ Ghi Danh
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Đăng xuất */}
      <div className=" btn_logout">
        <div
          onClick={onLogOut}
          className="btn mx-auto text-center btn-danger button"
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
