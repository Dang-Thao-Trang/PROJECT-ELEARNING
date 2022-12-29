import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import courseAPI from "../../services/courseAPI";
import "./ShowCategory.scss";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShowCategory = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("BackEnd");
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

  const [showCategories, setShowCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await courseAPI.getShowCatagory(key);
      setShowCategories(data);
      console.log(data);
    })();
  }, [key]);
  return (
    <div className="show container-fluid" id="show">
      <Tabs
        id="controlled-tab-example"
        className="mb-3 tabs"
        onSelect={(k) => setKey(k)}
      >
        {categories.length > 0 &&
          categories.map((item, i) => (
            <Tab
              eventKey={item.maDanhMuc}
              title={item.tenDanhMuc}
              key={item.maDanhMuc}
              className="show_list row"
            >
              {showCategories.reverse().map((item, i) => (
                <div
                  className="col-xs-12 col-sm-6 col-md-4 show_item"
                  key={item.maKhoaHoc}
                >
                  <Card
                    onClick={() => navigate(`/course/${item.maKhoaHoc}`)}
                    className="card_item"
                  >
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
              ))}
            </Tab>
          ))}
      </Tabs>
    </div>
  );
};

export default ShowCategory;
