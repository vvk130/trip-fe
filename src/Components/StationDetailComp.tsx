import { useParams } from "react-router-dom";
import MapComponent from "./MapComp";
import Position from "../Types/Positions";

const StationDetail = (): JSX.Element => {
  const { id } = useParams();
  const positions: Position[] = [{ coordinateX: null, coordinateY: null }];

  return (
    <>
      <h1>Station {id}</h1>
      <p>Name: </p>
      <p>Address: </p>
      <p>Coordinate X: </p>
      <p>Coordinate Y: </p>

      <h2>Journey Details</h2>
      <h3>Departure Station {id}</h3>
      <p>Total Number of Journeys:</p>
      <p>Average Distance:</p>
      <p>Average Duration: </p>
      <h3>Return Station {id}</h3>
      <p>Total Number of Journeys:</p>
      <MapComponent positions={positions} />
    </>
  );
};

export default StationDetail;
