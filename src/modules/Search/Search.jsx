import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import courseAPI from "../../services/courseAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Search.scss";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keysearch, setKeysearch] = useState([]);
  const redirectUrl = searchParams.get("tenKhoaHoc");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const data = await courseAPI.searchCourses(redirectUrl);
        setKeysearch(data);
        console.log(data);
      } catch (error) {
        setKeysearch([]);
      }
    })();
  }, [redirectUrl]);

  return (
    <div className="search">
      <p className="search_title">Kết quả tìm kiếm</p>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: { rows: 1 },
          },
          450: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: { rows: 2 },
          },
          579: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            grid: { rows: 2 },
          },
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: { rows: 2 },
          },
          993: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
          1201: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
        }}
        navigation={true}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {keysearch.map((item) => (
          <SwiperSlide key={item.maKhoaHoc}>
            <div className="card_item" key={item.maKhoaHoc}>
              <Card onClick={() => navigate(`/course/${item.maKhoaHoc}`)}>
                <Card.Img
                  variant="top"
                  src={item.hinhAnh}
                  alt={item.tenKhoaHoc}
                />
                <Card.Body>
                  <Card.Title>{item.tenKhoaHoc}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Search;
