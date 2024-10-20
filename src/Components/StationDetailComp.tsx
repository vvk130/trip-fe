import { useParams } from "react-router-dom";
import MapComponent from "./MapComp";
import Position from "../Types/Positions";

const StationDetail = (): JSX.Element => {
  const { id } = useParams();
  const positions: Position[] = [
    { coordinateX: 50.22, coordinateY: 50.444 },
    { coordinateX: 60.12, coordinateY: 40.123 },
  ];

  return (
    <>
      <h1>Station {id}</h1>
      <p>Name: </p>
      <p>Address: </p>
      <p>Coordinate X: </p>
      <p>Coordinate Y: </p>

      <h2>Station Details</h2>
      <MapComponent positions={positions} />
    </>
  );
};

export default StationDetail;
