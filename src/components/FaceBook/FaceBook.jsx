import React from "react";
import "./FaceBook.scss";
import { FaHandPointRight } from "react-icons/fa";

const FaceBook = () => {
  return (
    <div>
      <div className="container fb">
        <div className="row">
          <div className="col-12 col-sm-6 fb_des">
            <h1 className="fb_title">
              HÃY LIKE VÀ THEO DÕI FANPAGE CYBERSORFT
            </h1>
            <div className="des_write">
              <ul>
                <li>
                  <span>
                    <FaHandPointRight />
                  </span>
                  Cập nhật các thông báo và khuyến mại sớm nhất
                </li>
                <li>
                  <span>
                    <FaHandPointRight />
                  </span>{" "}
                  Hiểu rõ hơn về ngành nghề
                </li>
                <li>
                  <span>
                    <FaHandPointRight />
                  </span>{" "}
                  Giao lưu, trao đổi cùng giảng viên và bạn bè
                </li>
                <li>
                  <span>
                    <FaHandPointRight />
                  </span>{" "}
                  Được tư vấn trực tiếp
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 fb_link">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width={400}
              height={400}
              className="iframe"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceBook;
