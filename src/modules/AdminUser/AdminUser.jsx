import React from "react";
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authAPI from "../../services/authApi";
import "./AdminUser.scss";

const AdminUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.auth);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      taiKhoan: `${user.taiKhoan}`,
      //   matKhau: `${user.password}`,
      matKhau: "",
      email: `${user.email}`,
      soDt: `${user.soDT}`,
      maLoaiNguoiDung: "KhachHang",
      hoTen: `${user.hoTen}`,
    },
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    authAPI.updateUserClient(values);
    alert("Để kiểm tra xem đã cập nhật thành công vui lòng đăng nhập lại");
    alert("Nếu không thành công vui lòng điền lại email khác");
    console.log(values);
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
                input="text"
                value={user.taiKhoan}
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
            {/* <div className="w-100 text-danger">
          {errors?.matKhau && <span>{errors?.matKhau?.message}</span>}
        </div> */}
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
                {...register("soDt", {
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
              {errors?.soDt && <span>{errors?.soDt?.message}</span>}
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
        </div>

        <div
          onClick={onLogOut}
          className="btn mx-auto text-center btn-info btn_logout"
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
