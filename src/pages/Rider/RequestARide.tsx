import RideForm from "@/components/modules/Rides/RideForm";
import RideMap from "@/components/modules/Rides/RideMap";

export default function RequestARide() {
  return (
    <div className="grid grid-cols-12 gap-6 py-10 items-center">
      <div className="col-span-12 lg:col-span-4">
        <RideForm />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <RideMap />
      </div>
    </div>
  );
}
