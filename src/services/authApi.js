import fetcher from "./fetcher";

const authAPI = {
  //đăng nhập
  signin: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", values);
  },
  // đăng ký
  signup: async (values) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      maNhom: "GP01",
      ...values,
    });
  },
  // lấy thông tin đăng nhập
  getUserInfo: () => {
    return fetcher.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  // cập nhật thông tin
  updateUserClient: (values) => {
    return fetcher.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      maNhom: "GP01",
      ...values,
    });
  },
};

export default authAPI;
