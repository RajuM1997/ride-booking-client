import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface IProps {
  pickup: { lat: number; lng: number } | null;
  destination: { lat: number; lng: number } | null;
}

// Component to handle map re-centering dynamically
const RecenterMap = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);
  return null;
};

export default function RideMap({ pickup, destination }: IProps) {
  const pickupCoords =
    pickup && pickup.lat && pickup.lng
      ? ([Number(pickup.lat), Number(pickup.lng)] as [number, number])
      : null;

  const destinationCoords =
    destination && destination.lat && destination.lng
      ? ([Number(destination.lat), Number(destination.lng)] as [number, number])
      : null;

  const fallbackCenter: [number, number] = [23.8103, 90.4125]; // Dhaka
  const center: [number, number] =
    destinationCoords || pickupCoords || fallbackCenter;

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false} // optional: disable scroll zoom
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {pickupCoords && (
        <Marker position={pickupCoords}>
          <Popup>Pickup</Popup>
        </Marker>
      )}

      {destinationCoords && (
        <Marker position={destinationCoords}>
          <Popup>Destination</Popup>
        </Marker>
      )}

      {pickupCoords && destinationCoords && (
        <Polyline positions={[pickupCoords, destinationCoords]} />
      )}

      {/* Dynamically recenter the map */}
      <RecenterMap center={center} />
    </MapContainer>
  );
}
