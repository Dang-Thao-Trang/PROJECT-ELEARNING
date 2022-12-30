import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
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
  // const { loading} = useSelector((state) => state.auth);
  const [useUpdate, setUseUpdate] = useState([]);
  const [detailCourse, setDetailCourse] = useState([]);

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

  useEffect(() => {
    registerDetail();
  }, []);

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

  const { user } = useSelector((state) => state.auth);

  const handleDelete = (values) => {
    (async () => {
      try {
        await courseAPI.getDeleteRegister({
          maKhoaHoc: values,
          taiKhoan: user.taiKhoan,
        });
        registerDetail();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const onLogOut = () => {
    dispatch(logout());
    navigate("/signin");
  };

  const { errors } = formState;

  return (
    <div className="bg-warning pt-5 mt-5 admin">
      <div className="container-fluid">
        <div className="row">
          <h3 className="admin_title">Thông tin của bạn</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                // disabled={loading}
                className="btn update btn-warning my-1"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>

        <div
          onClick={onLogOut}
          className="btn mx-auto text-center btn-info btn_logout"
        >
          Đăng xuất
        </div>
      </div>

      {/* Dang ky khoa hoc */}

      <div className="container">
        <h4>Khoá học bạn tham gia</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Khoá Học</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {detailCourse.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.tenKhoaHoc}</td>
                <td>{item.moTa}</td>
                <td>
                  <button onClick={() => handleDelete(item.maKhoaHoc)}>
                    Huỷ Ghi Danh
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUser;
