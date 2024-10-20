import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Table from "../Utils/Table";
import SearchBar from "./Forms/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComp";

const PaginatedComp = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 20;

  const positions = [
    { coordinateX: 51.51, coordinateY: -0.1 },
    { coordinateX: 51.52, coordinateY: -0.12 },
    { coordinateX: 51.53, coordinateY: -0.08 },
    { coordinateX: 51.54, coordinateY: -0.07 },
    { coordinateX: 51.55, coordinateY: -0.06 },
    { coordinateX: 51.56, coordinateY: -0.11 },
    { coordinateX: 55.57, coordinateY: -0.1 },
    { coordinateX: 51.58, coordinateY: -0.09 },
    { coordinateX: 50.59, coordinateY: -0.08 },
  ];

  // const defaultCenter: [number, number] =
  //   positions?.length > 0 &&
  //   positions[0].coordinateX != null &&
  //   positions[0].coordinateY != null
  //     ? [positions[0].coordinateX, positions[0].coordinateY]
  //     : [60.1699, 24.9384];
  // const defaultZoom: number = 12;
  // const icon = L.icon({ iconUrl: iconMarker });

  const data = [
    { id: 1, name: "Station 1", age: 30 },
    { id: 2, name: "Station 3", age: 25 },
    { id: 3, name: "Station 20", age: 28 },
  ];

  return (
    <>
      <h1>Stations</h1>
      <SearchBar />
      <p>See stations on map</p>
      <Table
        rows={data}
        renderRow={(row) => {
          return (
            <tr key={row.id}>
              <td>{row.id}</td>
              <Link to={`/stations/${row.id}`}>{row.name}</Link>
            </tr>
          );
        }}
      />
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      <MapComponent positions={positions} />
    </>
  );
};

export default PaginatedComp;
