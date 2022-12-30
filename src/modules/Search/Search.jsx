// import React from "react";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import courseAPI from "../../services/courseAPI";
// import SearchItem from "./SearchItem";

// const Search = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [listCourses, setListCourses] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   useEffect(() => {
//     (async () => {
//       console.log(1);
//       try {
//         const tenKhoaHoc = searchParams?.get("q");
//         const res = await courseAPI.searchCourses(
//           encodeURIComponent(tenKhoaHoc)
//         );
//         setListCourses(res.data);
//         console.log(res.data);
//       } catch (error) {
//         setListCourses([]);
//         console.log(error);
//       }
//     })();
//   }, [location.search]);
//   return (
//     <div className="max-w-[1340px] w-full mx-auto px-6 py-12 min-h-[550px] ">
//       <h2 className="sm:text-[32px] text-[25px] font-bold mb-4 ">
//         {listCourses?.length || 0} kết quả cho {`"${searchParams?.get("q")}"`}
//       </h2>
//       <div className="flex flex-col">
//         {listCourses.length > 0 &&
//           listCourses.map((item, index) => <SearchItem item={item} />)}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import courseAPI from "../../services/courseAPI";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keysearch, setKeysearch] = useState([]);

  const redirectUrl = searchParams.get("tenKhoaHoc");
  console.log(redirectUrl);

  useEffect(() => {
    (async () => {
      try {
        const data = await courseAPI.searchCourses(redirectUrl);
        setKeysearch(data);
        console.log(data);
      } catch (error) {
        setKeysearch([]);
      }
    })();
  }, [redirectUrl]);
  // paginate
  return (
    <div>
      {keysearch.map((item) => (
        <div className="card_item" key={item.maKhoaHoc}>
          <Card>
            <Card.Img variant="top" src={item.hinhAnh} alt={item.tenKhoaHoc} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Search;
