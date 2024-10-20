import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import SearchBar from "./Forms/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComp";
import { useQuery } from "@tanstack/react-query";
import StationPaginatedDto from "../Types/StationPaginatedDto";
import baseUrl from "../Utils/urls";
import Position from "../Types/Positions";

function PaginatedComp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ["stations", currentPage, searchTerm],
    queryFn: () =>
      fetch(
        `${baseUrl}/api/Stations?Filters=%28StationName%7CStationAddress%29%40%3D%2A${searchTerm}&Page=${currentPage}`
      ).then((res) => res.json()),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setCurrentPage(1);
  };

  const totalPages = data?.pagesTotal;

  const positions: Position[] =
    data?.data?.rows
      .filter(
        (station: StationPaginatedDto) =>
          station.coordinateX !== null && station.coordinateY !== null
      )
      .map((station: StationPaginatedDto) => ({
        coordinateX: station.coordinateX as number,
        coordinateY: station.coordinateY as number,
      })) || [];

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>Stations</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <text>Total Stations: {data?.count}</text>
        {data?.data.map((station: StationPaginatedDto) => (
          <p key={station.id}>
            <Link to={`/stations/${station.id}`}>{station.stationName}</Link> ||{" "}
            {station.stationAddress} || {station.coordinateX},{" "}
            {station.coordinateY}
          </p>
        ))}
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />
      <MapComponent positions={positions} />
    </>
  );
}

export default PaginatedComp;
