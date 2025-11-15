export async function getLatLng(address: string) {
  console.log(address);

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  if (!data.length) return null;

  return {
    lat: parseFloat(data[0]?.lat),
    lng: parseFloat(data[0]?.lon),
  };
}
