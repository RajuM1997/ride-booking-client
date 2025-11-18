"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";

// Fix marker icon
const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

interface IProps {
  pickup: { lat: number; lng: number } | null;
  destination: { lat: number; lng: number } | null;
}

// Component to recenter map when center changes
interface RecenterProps {
  center: [number, number] | null;
}

function RecenterMap({ center }: RecenterProps) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);

  return null;
}

export default function RideReqMap({ pickup, destination }: IProps) {
  const [pickupCoords, setPickupCoords] = useState<[number, number] | null>(
    null
  );
  const [destinationCoords, setDestinationCoords] = useState<
    [number, number] | null
  >(null);

  const fallbackCenter: [number, number] = [23.8103, 90.4125]; // Dhaka

  const center: [number, number] =
    destinationCoords || pickupCoords || fallbackCenter;

  // Update coords when props change
  useEffect(() => {
    setPickupCoords(pickup ? [pickup.lat, pickup.lng] : null);
    setDestinationCoords(
      destination ? [destination.lat, destination.lng] : null
    );
  }, [pickup, destination]);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full min-h-[400px] lg:min-h-[80vh] rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <RecenterMap center={center} />

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
