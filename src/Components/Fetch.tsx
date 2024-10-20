// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Define the Station interface
interface Station {
  id: number;
  stationName: string;
  stationAddress: string;
  coordinateX: string;
  coordinateY: string;
}

// Define the response structure
interface StationResponse {
  count: number;
  pagesTotal: number;
  data: Station[];
}

// const App: React.FC = () => {
//   // Update the state type to handle the full response
//   const [data, setData] = useState<StationResponse | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get<StationResponse>(
//         "https://tripnetreactbackend-app-20241012.agreeablebay-04f023f8.swedencentral.azurecontainerapps.io/api/Stations"
//       )
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

// };

// export default App;

export default function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://tripnetreactbackend-app-20241012.agreeablebay-04f023f8.swedencentral.azurecontainerapps.io/api/Stations"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>API Data</h1>
      <h2>Total Stations: {data?.count}</h2>
      <h2>Total Pages: {data?.pagesTotal}</h2>
      <h3>Stations List:</h3>
      <ul>
        {data?.data.map((station: Station) => (
          <li key={station.id}>
            <strong>{station.stationName}</strong> - {station.stationAddress}
            <br />
            Coordinates: {station.coordinateX}, {station.coordinateY}
          </li>
        ))}
      </ul>
    </div>
  );
}
