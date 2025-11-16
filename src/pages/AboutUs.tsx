import user1 from "@/assets/users/user1.png";
import user2 from "@/assets/users/user2.png";
import user3 from "@/assets/users/user3.png";

export default function AboutUs() {
  return (
    <div className="container mx-auto py-20">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-40">
          <div className="bg-linear-to-r from-blue-200/10 via-blue-100/10 shadow-md to-blue-200/10 backdrop-blur-sm   rounded-md text-center p-6">
            <img
              src={user1}
              alt=""
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <h3 className="text-xl py-3 font-semibold text-gray-900 dark:text-white">
              Alice Johnson
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              CEO & Founder — Passionate about creating seamless and reliable
              ride experiences.
            </p>
          </div>

          <div className="bg-linear-to-r from-green-200/10 via-green-100/10 to-green-200/10 backdrop-blur-sm shadow-md  rounded-md text-center  p-6">
            <img
              src={user3}
              alt=""
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <h3 className="text-xl py-3 font-semibold text-gray-900 dark:text-white">
              Mark Thompson
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              CTO — Focused on building scalable technology to ensure fast,
              real-time ride tracking.
            </p>
          </div>

          <div className="bg-linear-to-r from-purple-200/10 via-purple-100/10 to-purple-200/10 backdrop-blur-sm shadow-md rounded-md p-6 text-center">
            <img
              src={user2}
              alt=""
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <h3 className="text-xl py-3 font-semibold text-gray-900 dark:text-white">
              Sophia Lee
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-base">
              Operations Manager — Ensures every ride runs smoothly and drivers
              stay supported.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold text-center mb-4">Our Mission</h2>

        <p className="text-base max-w-3xl mx-auto text-center">
          Our mission at <span className="font-semibold">GoTogether</span> is to
          transform the way people move around cities by offering a safer,
          smarter, and more accessible ride-sharing experience. We believe
          transportation should be effortless — that’s why we focus on
          reliability, real-time technology, and community trust.
        </p>

        <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mt-4">
          Whether you're a rider looking for a convenient trip or a driver
          seeking secure earning opportunities, we’re committed to creating a
          platform where every journey brings ease, comfort, and confidence.
        </p>
      </div>
    </div>
  );
}
