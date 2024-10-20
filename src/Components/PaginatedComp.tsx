import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import SearchBar from "./Forms/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComp";
import { useQuery } from "@tanstack/react-query";
import StationPaginatedDto from "../Types/StationPaginatedDto";

function PaginatedComp() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["stations", currentPage],
    queryFn: () =>
      fetch(
        `https://tripnetreactbackend-app-20241012.agreeablebay-04f023f8.swedencentral.azurecontainerapps.io/api/Stations?Page=${currentPage}`
      ).then((res) => res.json()),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.pagesTotal;

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>Stations</h1>
      <SearchBar />
      <p>See stations on map</p>
      <div>
        <text>Total Stations: {data?.count}</text>
        {data?.data.map((station: StationPaginatedDto) => (
          <p key={station.id}>
            <Link to={`/stations/${station.id}`}>{station.stationName}</Link> ||{" "}
            {station.stationAddress} ||
            {station.coordinateX}, {station.coordinateY}
          </p>
        ))}
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />
      <MapComponent positions={[{ coordinateX: null, coordinateY: null }]} />
    </>
  );
}

export default PaginatedComp;
