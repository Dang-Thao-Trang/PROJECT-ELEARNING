import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorBoundarry from "../components/ErrorBoundarry";
import NotFound from "../components/NotFound";
const RoutLayout = lazy(() => import("../components/RoutLayout"));
const AdminUser = lazy(() => import("../modules/AdminUser"));
const Auth = lazy(() => import("../modules/Auth"));
const Signin = lazy(() => import("../modules/Auth/Signin"));
const Signup = lazy(() => import("../modules/Auth/Signup"));
const CourseItem = lazy(() => import("../modules/CourseItem"));
const Home = lazy(() => import("../modules/Home"));
const Search = lazy(() => import("../modules/Search"));
const ShowCategory = lazy(() => import("../modules/ShowCategory"));

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
  // not found
  { path: "*", element: <NotFound /> },
]);

export default routes;
