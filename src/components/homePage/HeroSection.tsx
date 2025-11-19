import { Button } from "../ui/button";
import { Link } from "react-router";
import banner from "@/assets/banner2.mp4";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-1 gap-6 items-center h-full md:px-16">
        <div className="text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Ride with Confidence, Arrive with Peace of Mind
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-normal lg:px-40 text-base md:text-lg py-4 text-white"
          >
            From quick city trips to long-distance travel, our trusted drivers
            and real-time tracking ensure every ride is smooth, safe, and
            stress-free. Ride your way — anytime, anywhere.
          </motion.p>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="font-normal lg:px-40 text-base md:text-lg py-4 text-white"
          >
            <Button asChild>
              <Link to={"/rider/req-ride"}>Request A Ride</Link>
            </Button>
          </motion.div>
        </div>

        {/* Optional video side element (if you want a second video, otherwise skip) */}
        {/* <div>
          <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
            <source src="/banner.mov" type="video/mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}
