import fetcher from "./fetcher";
const courseAPI = {
  getCategory: () => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },

  getShowCatagory: () => {
    return fetcher.get("QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: {
        maNhom: "GP03",
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
};

export default courseAPI;
