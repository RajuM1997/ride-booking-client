import { Button } from "../ui/button";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="grid grid-cols-2 gap-6 items-center h-full">
        <div>
          <h2 className="text-6xl">
            Reliable Rides, Seamless Journeys — Wherever You’re Headed, We’ve
            Got You Covered.
          </h2>
          <p className="font-normal text-base py-4">
            From quick city trips to long-distance travel, our trusted drivers
            and real-time tracking ensure every ride is smooth, safe, and
            stress-free. Ride your way — anytime, anywhere.
          </p>
          <Button asChild>
            <Link to={"/req-a-ride"}>Request A Ride</Link>
          </Button>
        </div>
        <div
        //   className="w-full h-full bg-contain scale-110 bg-center bg-no-repeat"
        //   style={{ backgroundImage: `url(${heroImg})` }}
        >
          <img src={heroImg} alt="" className="scale-110 w-full h-full" />
        </div>
      </div>
    </div>
  );
}
