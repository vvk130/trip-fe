import Position from "../Types/Positions";

const getCenterCoordinatesOrDefaultHelsinki = (positions: Position[]): [number, number] => {
  const defaultCoordinatesHelsinki: [number, number] = [60.1699, 24.9384]; 

  if (positions.length > 0) {
    const { coordinateX, coordinateY } = positions[0];

    if (coordinateX != null && coordinateY != null) {
      return [coordinateX, coordinateY];
    }
  }

  return defaultCoordinatesHelsinki;
};

export default getCenterCoordinatesOrDefaultHelsinki;