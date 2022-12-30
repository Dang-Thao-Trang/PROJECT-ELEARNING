import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit, FaUserLock, FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
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
    if (value === "") {
      return;
    } else {
      navigate(`/search?tenKhoaHoc=${value.tenKhoaHoc}`);
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
              <Link to="/">Home</Link>
              <Link to="/category">Danh Muc</Link>
              <Link to="/#course">Khoá Học</Link>
              <Link to="/#footer">Tư vấn</Link>
              <form onSubmit={handleSubmit(onSubmit)} className="d-flex search">
                <input
                  {...register("tenKhoaHoc")}
                  className="input"
                  type="search"
                  placeholder="Nhập khóa học "
                />
                <button type="submit" className="btn btn-warning">
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
