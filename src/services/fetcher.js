import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTY4OTYwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxODM3MjAwfQ.Yk1H5QCjda1n9Cd5-k2yU_DLnRqRvaB7FIkn1hIuPE0",
  },
});

// interceptors: là nơi trung gian mà api trước khi request lên server sẽ đứng tại đây và xử lý các thao tác ta yâu cầu
fetcher.interceptors.response.use(
  (reponse) => {
    return reponse.data;
  },
  // thất bại
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  }
);

fetcher.interceptors.request.use(
  (config) => {
    // thêm authorization vào header config (nếu có)
    const { accessToken } = JSON.parse(localStorage.getItem("user")) || {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetcher;
