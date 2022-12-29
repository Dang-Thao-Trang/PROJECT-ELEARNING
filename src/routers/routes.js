import { createBrowserRouter } from "react-router-dom";
import ErrorBoundarry from "../components/ErrorBoundarry";
import NotFound from "../components/NotFound";
import RoutLayout from "../components/RoutLayout";
import AdminUser from "../modules/AdminUser";
import Auth from "../modules/Auth";
import Signin from "../modules/Auth/Signin";
import Signup from "../modules/Auth/Signup";
import CourseItem from "../modules/CourseItem";
import Home from "../modules/Home";
import Search from "../modules/Search";
import ShowCategory from "../modules/ShowCategory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    errorElement: <ErrorBoundarry />,
    children: [
      { index: true, element: <Home /> },
      // AdminUser
      { path: "/user", element: <AdminUser /> },
      // Khoa Hoc
      { path: "/course/:courseId", element: <CourseItem /> },
      // Danh muc
      { path: "/category", element: <ShowCategory /> },
      // Search
      { path: "/search", element: <Search /> },
      // Authentication
      {
        path: "",
        element: <Auth />,
        children: [
          {
            path: "/signin",
            element: <Signin />,
          },
          { path: "/signup", element: <Signup /> },
        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default routes;
