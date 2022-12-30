import fetcher from "./fetcher";
const courseAPI = {
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

  getCourse: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        maNhom: "GP01",
      },
    });
  },
  // khoá học
  getCourseItem: (courseId) => {
    return fetcher.get("QuanLyKhoaHoc/LayThongTinKhoaHoc", {
      params: {
        maKhoaHoc: courseId,
      },
    });
  },

  searchCourses: (nameCourses) => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        tenKhoaHoc: nameCourses,
      },
    });
  },

  // dang ky khoa hoc
  getRegister: (registered) => {
    return fetcher.post("QuanLyKhoaHoc/DangKyKhoaHoc", registered);
  },

  getDeleteRegister: (registered) => {
    return fetcher.post("QuanLyKhoaHoc/HuyGhiDanh", registered);
  },
};

export default courseAPI;
