import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "/react-responsive-pagination/themes/classic.css";
import ItemCard from "./ItemCard";
import JourneyDetail from "./StationDetailPage";

const defaultCenter: [number, number] = [51.505, -0.09];
const defaultZoom: number = 8;

const MapComp = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 20;

  return (
    <>
      <h1>Stations</h1>
      <p>See stations on map</p>
      <ItemCard />
      <JourneyDetail />
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapComp;
