import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import SearchBar from "./Forms/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComp";
import { useQuery } from "@tanstack/react-query";
import StationPaginatedDto from "../Types/StationPaginatedDto";

function PaginatedComp() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://tripnetreactbackend-app-20241012.agreeablebay-04f023f8.swedencentral.azurecontainerapps.io/api/Stations"
      ).then((res) => res.json()),
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = data?.pagesTotal;

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>Stations</h1>
      <SearchBar />
      <p>See stations on map</p>
      <div>
        <h1>API Data</h1>
        <h2>Total Stations: {data?.count}</h2>
        <h2>Total Pages: {data?.pagesTotal}</h2>
        <h3>Stations List:</h3>
        <ul>
          {data?.data.map((station: StationPaginatedDto) => (
            <li key={station.id}>
              <Link to={`/stations/${station.id}`}>
                <strong>{station.name}</strong>
              </Link>{" "}
              - {station.address}
              <br />
              Coordinates: {station.coordinateX}, {station.coordinateY}
            </li>
          ))}
        </ul>
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      <MapComponent positions={[{ coordinateX: null, coordinateY: null }]} />
    </>
  );
}

export default PaginatedComp;
