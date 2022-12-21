import React, { useEffect, useState } from "react";
import courseAPI from "../../../services/courseAPI";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import { Card, Button } from "react-bootstrap";
import "./Course.scss";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Course = () => {
  const navigate = useNavigate();
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await courseAPI.getCourse();
        console.log(data);
        setCourse(data);
        console.log(setCourse);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div id="course" className="course">
      <h1 className="course_title">KHOÁ HỌC CYBERSOFT</h1>
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
        {courses.map((item) => (
          <SwiperSlide key={item.maKhoaHoc}>
            <div className="card_item">
              <Card onClick={() => navigate(`/course/${item.maKhoaHoc}`)}>
                <Card.Img
                  variant="top"
                  src={item.hinhAnh}
                  alt={item.tenKhoaHoc}
                />
                {/* <Card.Body>
                  <Card.Title className="text-dark">
                    {item.maKhoahoc}
                  </Card.Title>
                </Card.Body> */}
              </Card>
            </div>
            <span></span>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
    </div>
  );
};

export default Course;
{
}
