import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { StarIcon } from "lucide-react";

interface IUserFeedback {
  username: string;
  feedback: string;
}
const userFeedbacks: IUserFeedback[] = [
  {
    username: "Ayesha Rahman",
    feedback:
      "Just joined recently and I’m genuinely impressed! The rides are smooth, drivers are polite, and the entire booking process is effortless. The real-time tracking makes the experience even more reliable and stress-free.",
  },
  {
    username: "Samiul Hasan",
    feedback:
      "I take rides almost every day and the service never disappoints. The pricing is fair, the cars are clean, and the drivers maintain professionalism. I really enjoy how the app prioritizes frequent riders with helpful perks.",
  },
  {
    username: "Nadia Akter",
    feedback:
      "The app has become a big part of my daily routine. Everything from booking to arrival is well-organized. I love how quickly drivers respond and how consistently on time they are. Highly recommended for daily commuters!",
  },
  {
    username: "Rafid Chowdhury",
    feedback:
      "Perfect for business travel! The pickup times are faster, and the entire ride experience feels premium. I rely on this service for meetings across the city, and it consistently saves me time and hassle.",
  },
  {
    username: "Meherun Nesa",
    feedback:
      "I appreciate how affordable the service is, especially with regular discounts and promotional offers. The referral rewards helped me save even more. It’s a great platform for both occasional and regular riders.",
  },
  {
    username: "Zihan Mahmud",
    feedback:
      "Booking a ride takes just a few taps, and the response time is amazing. The drivers are knowledgeable about routes, which makes every trip smoother and quicker. It’s truly a dependable ride-sharing service.",
  },
  {
    username: "Farhana Ibrahim",
    feedback:
      "I feel safe and comfortable every time I ride. The customer support is responsive, and drivers follow safety protocols. The overall experience feels polished and user-focused. I’m definitely sticking with this app!",
  },
];

export function TestimonialSection() {
  return (
    <section className="pb-10">
      <div className="py-10 lg:px-40 text-center">
        <h2 className="py-5 text-2xl font-semibold">Our Customer Say's</h2>
        <p className="">
          Hear from our riders! We value every feedback and strive to make every
          journey safe, comfortable, and enjoyable. Here’s what our customers
          have to say about their experiences with us.
        </p>
      </div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {userFeedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-1">
              <Card className="py-0 ">
                <CardContent className="flex flex-col h-[300px] justify-center p-6">
                  <div className="flex justify-center gap-2">
                    <StarIcon size={22} className="text-red-500" />
                    <StarIcon size={22} className="text-red-500" />
                    <StarIcon size={22} className="text-red-500" />
                    <StarIcon size={22} className="text-red-500" />
                    <StarIcon size={22} className="text-red-500" />
                  </div>
                  <p className="pt-6 text-center lg:px-25">
                    <i>" {item.feedback} "</i>
                  </p>

                  <div className="text-right pt-5 lg:px-25">
                    <span className="text-1xl  font-semibold">
                      _ {item.username}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </section>
  );
}
