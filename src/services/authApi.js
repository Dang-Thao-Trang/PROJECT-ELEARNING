import fetcher from "./fetcher";

const authAPI = {
  signin: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", values);
  },

  signup: async (values) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      maNhom: "GP01",
      ...values,
    });
  },

  updateUserClient: (values) => {
    return fetcher.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      maNhom: "GP01",
      ...values,
    });
  },
};

export default authAPI;
