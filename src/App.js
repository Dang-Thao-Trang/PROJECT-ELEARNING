import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";
import routes from "./routers/routes";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
