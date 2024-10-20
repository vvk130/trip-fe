type StationPaginatedDto = {
  id: number;
  stationName: string | null;
  stationAddress: string | null;
  coordinateX: number | null;
  coordinateY: number | null;
};

export default StationPaginatedDto;