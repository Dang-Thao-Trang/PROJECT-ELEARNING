import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit, FaUserLock, FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./Header.scss";

// boostrap
import { Container, Navbar, Nav } from "react-bootstrap";
// import HamburgerMenue from "react-hamburger-menu";
import HamburgerMenue from "hamburger-react";

const Header = () => {
  const navigate = useNavigate();
  const [onScroll, setOnScroll] = useState(false);
  const [openMenue, setOpenMenue] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOnScroll(window.scrollY > 80);
    });
  }, []);
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { tenKhoaHoc: "" },
  });
  const onSubmit = (value) => {
    // evt.preventDefault();
    if (value === "") {
      return;
    } else {
      navigate(`/search?tenKhoaHoc=${value}`);
      reset({ tenKhoaHoc: "" });
    }
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="header" style={{ top: 0 }}>
      <Navbar
        variant="dark"
        expand="md"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "999",
        }}
        className={`header ${onScroll ? "on-scroll-header" : ""}`}
        onToggle={() => {
          setOpenMenue(!openMenue);
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
              alt="logo_brand"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbars">
            <HamburgerMenue
              isOpen={openMenue}
              menuClicked={null}
              width={25}
              height={15}
              strokeWidth={1.5}
              rotate={0}
              color={"White"}
              borderRadius={0}
              animationDuration={0.6}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbars">
            <Nav className="mx-auto gap-2 menue">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Link to="/">Home</Link>
              <Link to="/category">Danh Muc</Link>
              <Link to="/#course">Khoá Học</Link>
              <Link to="/#footer">Tư vấn</Link>
              {/* <form onSubmit={handleSubmit(onSubmitSearch)}> */}
              {/* <Form className="d-flex search">
                  <Form.Control
                    type="search"
                    placeholder="Tìm khoá học"
                    className="input"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning" className="btn_search">
                    <FaSearch />
                  </Button>
                </Form> */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mx-auto text-gray-600 lg:block hidden flex-1"
              >
                <input
                  {...register("tenKhoaHoc")}
                  className="border-2 w-[500px] border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                  type="search"
                  placeholder="Nhập khóa học bạn cần tìm.... "
                />
                <button type="submit" className="btn btn-danger">
                  Tìm
                </button>
              </form>
            </Nav>
            {user ? (
              <Nav className="signedin">
                <div className="user text-info pt-2">
                  <FaUserEdit />
                  <Link to="/user" className="mx-2 ">
                    {user.hoTen}
                  </Link>
                </div>
              </Nav>
            ) : (
              <Nav className="auth">
                <div className="signin me-3">
                  <Link to="/signin">
                    <FaUserLock className="logo_sign" />
                    Đăng nhập
                  </Link>
                  <Link to="/signup">
                    <FaUserPlus className="logo_sign" />
                    Đăng ký
                  </Link>
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
