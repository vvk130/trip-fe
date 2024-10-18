import React, { useEffect, useState } from "react";
import axios from "axios";

interface Station {
  id: number;
  stationName: string;
  stationAddress: string;
  coordinateX: string;
  coordinateY: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Station | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Station>(
        "https://tripnetreactbackend-app-20241012.agreeablebay-04f023f8.swedencentral.azurecontainerapps.io/index.html"
      )
      .then((response: { data: React.SetStateAction<Station | null> }) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: { message: React.SetStateAction<string | null> }) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
