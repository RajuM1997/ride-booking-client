import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useUpdateActivityMutation } from "@/redux/features/driver/driver.api";
import type { IErrorResponse } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

// Simple Online/Offline Toggle (React + Tailwind + TypeScript)
export default function OnlineOfficeToggle() {
  const { data } = useUserInfoQuery(undefined);
  const [online, setOnline] = useState(data?.data?.driver?.isAvailability);
  const [updateActivity] = useUpdateActivityMutation();
  const handleActivityStatus = async (status: string) => {
    setOnline(status);
    const toastId = toast.loading("Your Activity Changing...");
    try {
      const res = await updateActivity({
        availabilityStatus: status,
      }).unwrap();
      if (res.success) {
        toast.success(`You are currently ${status}`, { id: toastId });
      }
    } catch (error) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };
  return (
    <div className="flex gap-4">
      <span>{online === "ONLINE" ? "Online" : "Offline"}</span>
      {online === "ONLINE" ? (
        <button
          onClick={() => handleActivityStatus("OFFLINE")}
          className={`relative flex items-center w-14 h-7 rounded-full transition-colors duration-300 bg-green-500`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300
              translate-x-7`}
          ></span>
        </button>
      ) : (
        <button
          onClick={() => handleActivityStatus("ONLINE")}
          className={`relative flex items-center w-14 h-7 rounded-full transition-colors duration-300 bg-gray-300`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 translate-x-0`}
          ></span>
        </button>
      )}
    </div>
  );
}
