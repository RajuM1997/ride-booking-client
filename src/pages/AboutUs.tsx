import { User } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="container mx-auto py-16">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-4 ">About Us</h2>
        <p className=" text-base mb-10">
          At <span className="font-semibold">TrustTrip</span>, our mission is to
          make urban transportation safe, reliable, and convenient for everyone.
          From quick city rides to airport transfers, we connect riders with
          trusted drivers to ensure every journey is smooth and stress-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-40">
        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md shadow-md rounded-lg p-6 text-center">
          <User className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl pb-3 font-semibold text-gray-900 dark:text-white">
            Alice Johnson
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            CEO & Founder — Passionate about creating seamless and reliable ride
            experiences.
          </p>
        </div>

        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md shadow-md rounded-lg p-6 text-center">
          <User className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl pb-3 font-semibold text-gray-900 dark:text-white">
            Mark Thompson
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            CTO — Focused on building scalable technology to ensure fast,
            real-time ride tracking.
          </p>
        </div>

        <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md shadow-md rounded-lg p-6 text-center">
          <User className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl pb-3 font-semibold text-gray-900 dark:text-white">
            Sophia Lee
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Operations Manager — Ensures every ride runs smoothly and drivers
            stay supported.
          </p>
        </div>
      </div>
    </div>
  );
}
