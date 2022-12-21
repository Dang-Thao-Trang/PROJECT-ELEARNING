import React from "react";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import courseAPI from "../../services/courseAPI";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import { Card, Col, Row } from "react-bootstrap";
// import "./Course.scss";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import useRequest from "../../Hooks/useRequest";

const ShowCategory = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [key, setKey] = useState("home");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await courseAPI.getCategory();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // const { data: category } = useRequest(() => courseAPI.getShowCatagory());
  // console.log(category);
  // if (!category) {
  //   return null;
  // }
  const [showCategories, setShowCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await courseAPI.getShowCatagory(showCategories);
      setShowCategories(data);
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        className="mb-3"
        onSelect={(k) => setKey(k)}
      >
        {categories.map((item, i) => (
          <Tab
            eventKey={item.maDanhMuc}
            title={item.tenDanhMuc}
            key={item.maDanhMuc}
          >
            {showCategories.map((item, i) => (
              <div key={i} style={{ width: "300px" }}>
                {/* <Card onClick={() => navigate(`/course/${item.maKhoahoc}`)}>
                <Card.Img 
                    variant="top"
                    src={item.hinhAnh}
                    alt={item.tenKhoaHoc}
                  />
                  <Card.Body>
                    <Card.Title>{item.tenKhoaHoc}</Card.Title>
                  </Card.Body>
                </Card> */}
              </div>
            ))}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default ShowCategory;
