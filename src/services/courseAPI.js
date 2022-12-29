import fetcher from "./fetcher";
const courseAPI = {
  getCategory: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
      params: { maNhom: "GP03" },
    });
  },

  getShowCatagory: (maDanhMuc) => {
    return fetcher.get("QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: {
        maNhom: "GP03",
        maDanhMuc,
      },
    });
  },

  getCourse: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        maNhom: "GP03",
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
    return fetcher.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${nameCourses}`
    );
  },
};

export default courseAPI;
