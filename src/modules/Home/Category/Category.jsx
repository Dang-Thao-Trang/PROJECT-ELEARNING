import React, { useState, useEffect } from "react";
import courseAPI from "../../../services/courseAPI";
import "./Category.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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
  return (
    <div id="categories" className="categories">
      <h1 className="categories_title">CHUYÊN NGÀNH HỌC</h1>
      <div className="container-fluid">
        {categories.map((item) => (
          <div key={item.maDanhMuc}>
            <Button
              className="btn btn-light mx-2 categories_btn"
              onClick={() => navigate("/category")}
            >
              <span>{item.tenDanhMuc}</span>
            </Button>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Category;
