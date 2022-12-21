import { createBrowserRouter } from "react-router-dom";
import ErrorBoundarry from "../components/ErrorBoundarry";
import NotFound from "../components/NotFound";
import RoutLayout from "../components/RoutLayout";
import CourseItem from "../modules/CourseItem";
import Home from "../modules/Home";
import ShowCategory from "../modules/ShowCategory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    errorElement: <ErrorBoundarry />,
    children: [
      { index: true, element: <Home /> },
      { path: "/course/:courseId", element: <CourseItem /> },
      { path: "/category", element: <ShowCategory /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default routes;
