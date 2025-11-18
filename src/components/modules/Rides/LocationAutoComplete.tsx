/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { Input } from "@/components/ui/input";

interface LocationType {
  lat: number;
  lng: number;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  index: number;
  setLocations: Dispatch<SetStateAction<LocationType[]>>;
}

const LocationAutocomplete = ({
  value,
  onChange,
  placeholder,
  index,
  setLocations,
}: Props) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const fetchSuggestions = async (query: string) => {
    if (!query) return setSuggestions([]);
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1&limit=10&countrycodes=bd`
      );
      const data = await res.json();
      console.log(data);

      setSuggestions(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!value || !isFocused) return;
    const timeout = setTimeout(() => fetchSuggestions(value), 400);
    return () => clearTimeout(timeout);
  }, [value, isFocused]);

  const handleSelect = (item: any) => {
    // Set input value
    onChange(
      item.name + " " + item?.address?.state_district || item?.display_name
    );

    // Update parent location state
    setLocations((prev) => {
      const updated = [...prev];
      updated[index] = { lat: Number(item.lat), lng: Number(item.lon) };
      return updated;
    });

    // Close suggestions
    setSuggestions([]);
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)} // allow click on suggestion
      />

      {isFocused && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 bg-white dark:bg-gray-400 border rounded-md shadow-md z-50 max-h-56 overflow-y-auto">
          {loading && <div className="p-2 text-sm">Loading...</div>}

          {suggestions.map((item) => (
            <div
              key={item.place_id}
              className="p-2 text-sm hover:bg-gray-100 hover:text-black cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.name + " " + item?.address?.state_district ||
                item?.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
