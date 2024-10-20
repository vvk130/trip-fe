import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import getCenterCoordinatesOrDefaultHelsinki from "../Utils/getCenterCoordinatesOrDefaultHelsinki";

type Position = {
  coordinateX: number;
  coordinateY: number;
};

type MapComponentProps = {
  positions: Position[];
};

const MapComponent = ({ positions }: MapComponentProps) => {
  const defaultCenter: [number, number] =
    getCenterCoordinatesOrDefaultHelsinki(positions);
  const defaultZoom: number = 12;

  const icon = L.icon({ iconUrl: iconMarker });

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions?.map((position) => {
        if (position.coordinateX != null && position.coordinateY != null) {
          return (
            <Marker
              key={
                position.coordinateX.toString() +
                position.coordinateY.toString()
              }
              position={[position.coordinateX, position.coordinateY]}
              icon={icon}
            >
              <Popup>Station</Popup>
            </Marker>
          );
        }
      })}
    </MapContainer>
  );
};

export default MapComponent;
