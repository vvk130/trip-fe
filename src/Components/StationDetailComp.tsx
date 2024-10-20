import { useParams } from "react-router-dom";
import MapComponent from "./MapComp";
import Position from "../Types/Positions";
import { useQuery } from "@tanstack/react-query";
import baseUrl from "../Utils/urls";

function StationDetail() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["station", id],
    queryFn: () =>
      fetch(`${baseUrl}/api/Stations/${id}`).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data || !data.station) {
    return <p>No station details found.</p>;
  }

  const positions: Position[] = [
    {
      coordinateX: parseFloat(data.station.coordinateX),
      coordinateY: parseFloat(data.station.coordinateY),
    },
  ];

  return (
    <>
      <h1>Station {data.station.id}</h1>
      <p>Name: {data.station.stationName}</p>
      <p>Address: {data.station.stationAddress}</p>
      <p>Coordinate X: {data.station.coordinateX}</p>
      <p>Coordinate Y: {data.station.coordinateY}</p>
      <h2>Journey Details</h2>
      <h3>Departure Station {id}</h3>
      <p>Total Number of Journeys: {data.stationDetails.departureTotalNum}</p>
      <p>Average Distance: {data.stationDetails.avgDepartureDistance}</p>
      <p>Average Duration: {data.stationDetails.avgDepartureDuration}</p>
      <h3>Return Station {id}</h3>
      <p>Total Number of Journeys: {data.stationDetails.returnTotalNum}</p>
      <MapComponent positions={positions} />
    </>
  );
}

export default StationDetail;
