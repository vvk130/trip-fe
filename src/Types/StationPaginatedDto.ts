type StationPaginatedDto = {
  id: number;
  name: string | null;
  address: string | null;
  coordinateX: number | null;
  coordinateY: number | null;
};

export default StationPaginatedDto;