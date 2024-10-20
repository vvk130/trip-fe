import { useParams } from "react-router-dom";
import MapComponent from "./MapComp";
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

  if (!data) {
    return <p>No station details found.</p>;
  }

  return (
    <>
      <h1>Station {data.stationDto.id}</h1>
      <p>Name: {data.stationDto.stationName}</p>
      <p>Address: {data.stationDto.stationAddress}</p>
      <p>Coordinate X: {data.stationDto.coordinateX}</p>
      <p>Coordinate Y: {data.stationDto.coordinateY}</p>
      <h2>Journey Details</h2>
      {data.stationDetails.length > 0 && (
        <>
          <h3>Departure Station {id}</h3>
          <p>
            Total Number of Journeys: {data.stationDetails[0].departureTotalNum}
          </p>
          <p>
            Average Distance: {data.stationDetails[0].avgDepartureDistance}{" "}
          </p>
          <p>
            Average Duration: {data.stationDetails[0].avgDepartureDuration}{" "}
          </p>
          <h3>Return Station {id}</h3>
          <p>
            Total Number of Journeys: {data.stationDetails[0].returnTotalNum}
          </p>
        </>
      )}
      {data.stationDetails.length === 0 && <p>No journeys for this station.</p>}
      <MapComponent
        positions={[
          {
            coordinateX: Number(data.stationDto.coordinateX),
            coordinateY: Number(data.stationDto.coordinateY),
          },
        ]}
      />
    </>
  );
}

export default StationDetail;
