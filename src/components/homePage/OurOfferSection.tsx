import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import img1 from "@/assets/offer1.jpg";
import img2 from "@/assets/offer2.jpg";

export default function OurOfferSection() {
  return (
    <>
      <h2 className="py-10 text-2xl font-semibold">Our Offer</h2>

      <div className="grid grid-cols-2 gap-5">
        <Card className="pt-0">
          <img
            src={img1}
            alt=""
            className="max-h-[300px] object-cover rounded-tl-lg rounded-tr-lg"
          />
          <CardHeader>
            <CardTitle>Invite Friends, Earn Free Rides!</CardTitle>
            <CardDescription>
              Share your referral link with friends and get free ride credits
              every time someone takes their first trip. The more you share, the
              more you earn — it’s that simple!
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="pt-0">
          <img
            className="max-h-[300px] object-cover rounded-tl-lg rounded-tr-lg"
            src={img2}
            alt=""
          />
          <CardHeader>
            <CardTitle>Get 50% Off Your First Ride!</CardTitle>
            <CardDescription>
              New to our platform? Enjoy your very first ride with a 50%
              discount. Just sign up, book your ride, and experience comfort and
              convenience at half the price. Use code FIRST50 to claim your
              offer!
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
