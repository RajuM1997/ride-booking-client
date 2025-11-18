import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
export default function HowItWorkSection() {
  return (
    <div
      // style={{
      //   background: `url(${howWorkBg})`,
      // }}
      className={`py-10 overflow-x-hidden`}
    >
      <div className="lg:px-40">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="py-5 text-2xl font-semibold text-center"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base text-center text-gray-600 dark:text-gray-300"
        >
          Booking a ride has never been easier. Follow these simple steps to
          request, track, and complete your ride seamlessly — from start to
          finish, we make every journey smooth, safe, and reliable.
        </motion.p>
      </div>

      <ol className="hidden md:block relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700 my-10">
        {/* Step 1 */}
        <motion.li
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
        >
          <div className="relative flex items-start gap-1 md:gap-4 group-odd:flex-row-reverse md:group-odd:text-right group-even:order-last">
            <span className="w-5 h-5 shrink-0 rounded-full bg-[#70AE00]"></span>

            <div className="-mt-2 max-w-[400px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/20 p-2 md:p-5 rounded-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Request a Ride
              </h3>
              <p className="mt-0.5 text-base text-gray-700 dark:text-gray-200">
                Enter your pickup and destination, select ride type, and submit
                your request. Our system finds the nearest drivers instantly.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </motion.li>

        {/* Step 2 */}
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-1 md:gap-4 group-odd:flex-row-reverse md:group-odd:text-right group-even:order-last">
            <span className="w-5 h-5 shrink-0 rounded-full bg-[#70AE00]"></span>
            <div className="-mt-2 max-w-[400px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/20 p-2 md:p-5 rounded-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Driver Accepts
              </h3>
              <p className="mt-0.5 text-base text-gray-700 dark:text-gray-200">
                Nearby drivers receive your ride request. Once a driver accepts,
                you get instant confirmation and driver details.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        {/* Step 3 */}
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-2 md:gap-4 group-odd:flex-row-reverse lg:group-odd:text-right group-even:order-last">
            <span className="w-5 h-5 shrink-0 rounded-full bg-[#70AE00]"></span>

            <div className="-mt-2 max-w-[400px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/20 p-2 md:p-5 rounded-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Ride in Progress
              </h3>
              <p className="mt-0.5 text-base text-gray-700 dark:text-gray-200">
                Track your driver in real-time on the map. Enjoy a safe and
                comfortable ride while knowing exactly when you’ll arrive.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>

        {/* Step 4 */}
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-2 md:gap-4 group-odd:flex-row-reverse md:group-odd:text-right group-even:order-last">
            <span className="w-5 h-5 shrink-0 rounded-full bg-[#70AE00]"></span>

            <div className="-mt-2 max-w-[400px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/20 p-2 md:p-5 rounded-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Payment & Review
              </h3>
              <p className="mt-0.5 text-base text-gray-700 dark:text-gray-200">
                After reaching your destination, pay securely via the app and
                leave a review. Your feedback helps us improve every ride.
              </p>
            </div>
          </div>
          <div aria-hidden="true"></div>
        </li>
      </ol>
      <div className="md:hidden grid grid-cols-1 space-y-4 pt-10">
        <Card className=" bg-linear-to-r from-blue-200/10 via-blue-100/10 to-blue-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2 min-h-[150px] flex flex-col justify-center items-center">
            <CardTitle className="text-lg">Request a Ride</CardTitle>
            <CardDescription className="text-base">
              Enter your pickup and destination, select ride type, and submit
              your request. Our system finds the nearest drivers instantly.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-linear-to-r from-blue-200/10 via-blue-100/10 to-blue-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2 min-h-[150px] flex flex-col justify-center items-center">
            <CardTitle className="text-lg">Driver Accepts</CardTitle>
            <CardDescription className="text-base">
              Nearby drivers receive your ride request. Once a driver accepts,
              you get instant confirmation and driver details.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className=" bg-linear-to-r from-blue-200/10 via-blue-100/10 to-blue-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2 min-h-[150px] flex flex-col justify-center items-center">
            <CardTitle className="text-lg">Ride in Progress</CardTitle>
            <CardDescription className="text-base">
              Track your driver in real-time on the map. Enjoy a safe and
              comfortable ride while knowing exactly when you’ll arrive.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className=" bg-linear-to-r from-blue-200/10 via-blue-100/10 to-blue-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2 min-h-[150px] flex flex-col justify-center items-center">
            <CardTitle className="text-lg"> Payment & Review</CardTitle>
            <CardDescription className="text-base">
              After reaching your destination, pay securely via the app and
              leave a review. Your feedback helps us improve every ride.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
