// import ResponsivePagination from "react-responsive-pagination";
// import "react-responsive-pagination/themes/classic.css";
// import Table from "../Utils/Table";
// import SearchBar from "./Forms/SearchBar";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import MapComponent from "./MapComp";
// import { useQuery } from "react-query";
// import axios from "axios";
// import searchUrl from "../Utils/urls";
// import { useState } from "react";

import { useState } from "react";
import { useQuery } from "tanstack-query";
import axios from "axios";

export default function PaginatedComp() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: results,
    isLoading,
    error,
  } = useQuery(
    ["search", searchTerm],
    () => axios.get(`/api/search?query=${searchTerm}`),
    { enabled: !!searchTerm }
  );

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>Something went wrong: {error.message}</p>}

      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  );
}
// const [currentPage, setCurrentPage] = useState(8);
// const totalPages = 20;

// const positions = [
//   { coordinateX: 51.51, coordinateY: -0.1 },
//   { coordinateX: 51.52, coordinateY: -0.12 },
//   { coordinateX: 51.53, coordinateY: -0.08 },
//   { coordinateX: 51.54, coordinateY: -0.07 },
//   { coordinateX: 51.55, coordinateY: -0.06 },
//   { coordinateX: 51.56, coordinateY: -0.11 },
//   { coordinateX: 55.57, coordinateY: -0.1 },
//   { coordinateX: 51.58, coordinateY: -0.09 },
//   { coordinateX: 50.59, coordinateY: -0.08 },
// ];

// const data = [
//   { id: 1, name: "Station 1", Address: 30 },
//   { id: 2, name: "Station 3", Address: 25 },
//   { id: 3, name: "Station 20", Address: 28 },
// ];

//   const [searchTerm, setSearchTerm] = useState("");

// const {
//   data: results,
//   isLoading,
//   error,
// } = useQuery(
//   ["search", searchTerm],
//   () => axios.get(`${searchUrl}${searchTerm}`),
//   { enabled: !!searchTerm });

// return (
//   <>
//     <h1>Stations</h1>
/* <SearchBar />
      <p>See stations on map</p>
      <Table
        rows={data}
        renderRow={(row) => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/stations/${row.id}`}>{row.name}</Link>
              </td>
              <td>{row.Address}</td>
            </tr>
          );
        }}
      />
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      <MapComponent positions={positions} /> */
/* </>
  );
};

export default PaginatedComp; */
