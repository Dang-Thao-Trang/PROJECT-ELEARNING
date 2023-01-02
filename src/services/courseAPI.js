import fetcher from "./fetcher";
const courseAPI = {
  // mục khoá học
  getCategory: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
      params: { maNhom: "GP01" },
    });
  },
  getShowCatagory: (maDanhMuc) => {
    return fetcher.get("QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: {
        maNhom: "GP01",
        maDanhMuc,
      },
    });
  },

  // lấy danh sách khoá học
  getCourse: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        maNhom: "GP01",
      },
    });
  },
  getCourseItem: (courseId) => {
    return fetcher.get("QuanLyKhoaHoc/LayThongTinKhoaHoc", {
      params: {
        maKhoaHoc: courseId,
      },
    });
  },

  // tìm khoá học theo tên
  searchCourses: (nameCourses) => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        tenKhoaHoc: nameCourses,
      },
    });
  },

  // đăng ký khoá học
  getRegister: (registered) => {
    return fetcher.post("QuanLyKhoaHoc/DangKyKhoaHoc", registered);
  },

  // huỷ ghi danh
  getDeleteRegister: (registered) => {
    return fetcher.post("QuanLyKhoaHoc/HuyGhiDanh", registered);
  },
};

export default courseAPI;
