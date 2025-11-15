"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
interface IProps {
  pickup: {
    lat: number;
    lng: number;
  } | null;
  destination: {
    lat: number;
    lng: number;
  } | null;
}
export default function RideMap({ pickup, destination }: IProps) {
  const pickupCoords =
    pickup && pickup.lat && pickup.lng
      ? ([Number(pickup.lat), Number(pickup.lng)] as [number, number])
      : null;
  const destinationCoords =
    destination && destination.lat && destination.lng
      ? ([Number(destination.lat), Number(destination.lng)] as [number, number])
      : null;

  const fallbackCenter: [number, number] = [23.8103, 90.4125];
  const center: [number, number] = destinationCoords || fallbackCenter;
  return (
    <MapContainer
      center={center} // Dhaka
      zoom={8}
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
    </MapContainer>
  );
}
