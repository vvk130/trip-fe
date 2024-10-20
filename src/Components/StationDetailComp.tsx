import { useParams } from "react-router-dom";

const StationDetail = (): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      <h1>Station {id}</h1>
      <p>Name: </p>
      <p>Address: </p>
      <p>Coordinate X: </p>
      <p>Coordinate Y: </p>

      <h2>Station Details</h2>
    </>
  );
};

export default StationDetail;
