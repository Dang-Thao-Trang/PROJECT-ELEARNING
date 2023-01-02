import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaRocketchat } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import {
  AiOutlineFacebook,
  AiOutlineMessage,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer" className="bg-dark text-white py footer">
      <div className="container ft_top ">
        <div className="row">
          <div className="col-6 info_email">
            <h5 className="info_title">NHẬN THÔNG TIN KHUYẾN MÃI</h5>
            <p>
              CyberSoft sẽ gởi các khóa học trực tuyến, các chương trình
              CyberLive và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn. Đăng
              ký thông tin ngay!!!
              <FcSpeaker />
            </p>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email của bạn?"
                aria-describedby="basic-addon2"
              />
              <div className="btn btn_info">Nhận thông báo</div>
            </InputGroup>
          </div>
          <div className="col-6 direct ">
            <div className="ft_img">
              <img
                src="https://callio.vn/wp-content/uploads/2021/07/tong-dai-vien-callio-22.png"
                alt=""
              />

              <div className="ft_direrct">
                <p>Trao đổi trực tiếp cùng tư vấn viên</p>
                <div className="btn btn_direct">
                  <a href="https://www.facebook.com/lophocviet/">
                    Enter <FaRocketchat />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/* center */}
      <div className="container ft_center">
        <div className="row">
          <div className="col-6">
            <h6>Trụ sở</h6>
            <p>Hotline: 096.105.1014</p>
            <p>Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM</p>
          </div>
          <div className="col-6">
            <h6>Cơ sở 2</h6>
            <p>Hotline: 096.105.1014</p>
            <p>
              Địa chỉ: Tầng 2, toà nhà WinHome, 459 Sư Vạn hạnh, Quận 10, TPHCM
            </p>
          </div>
          <hr />
        </div>
        {/* bottomm */}
        <div className="container ft_bottom">
          <div className="row">
            <div className="col-6 write">
              <p>© Bản quyền CyberSoft 2017 - 2021 - Empower by CyberSoft</p>
            </div>
            <div className="col-6 icon">
              <a href="#">
                <AiOutlineFacebook />
              </a>
              <a href="#">
                <AiOutlineMessage />
              </a>
              <a href="#">
                <AiOutlineInstagram />
              </a>
              <a href="#">
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
