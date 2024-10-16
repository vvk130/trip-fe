import { useParams } from "react-router-dom";

const StationDetail = (): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      <h1>Station {id}</h1>
    </>
  );
};

export default StationDetail;
