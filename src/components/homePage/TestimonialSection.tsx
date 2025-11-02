import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import user1 from "@/assets/user-1.jpeg";
interface IUserFeedback {
  username: string;
  image: string;
  newUser: string;
  feedback: string;
}
const userFeedbacks: IUserFeedback[] = [
  {
    image: "/images/users/user1.jpg",
    username: "Ayesha Rahman",
    newUser: "New Member",
    feedback:
      "Just joined and already loving the experience! The rides are smooth, drivers are friendly, and the app is super easy to use.",
  },
  {
    image: "/images/users/user2.jpg",
    username: "Samiul Hasan",
    newUser: "Gold Member",
    feedback:
      "As a regular rider, I really appreciate the loyalty rewards. Priority booking and special discounts make every trip worth it.",
  },
  {
    image: "/images/users/user3.jpg",
    username: "Nadia Akter",
    newUser: "Silver Member",
    feedback:
      "I use the app almost daily for my commute. The service is consistent, affordable, and always on time. Highly recommended!",
  },
  {
    image: "/images/users/user4.jpg",
    username: "Rafid Chowdhury",
    newUser: "Platinum Member",
    feedback:
      "Outstanding service! The premium support and faster pickups make my business trips super convenient. Best ride-share app so far!",
  },
  {
    image: "/images/users/user5.jpg",
    username: "Meherun Nesa",
    newUser: "Bronze Member",
    feedback:
      "The offers and referral bonuses are great! I’ve saved quite a bit on my daily rides thanks to their loyalty program.",
  },
];

export function TestimonialSection() {
  return (
    <section className="pb-10">
      <h2 className="py-10 text-2xl font-semibold">Our Customer Say's</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" w-full"
      >
        <CarouselContent>
          {userFeedbacks.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <Card className="py-0">
                  <CardContent className="flex flex-col justify-center aspect-square  p-6">
                    <div className="flex gap-6 items-center ">
                      <img
                        src={user1}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <span className="text-1xl font-semibold">
                          {item.username}
                        </span>
                        <p className=" text-sm">
                          <i>{item.newUser}</i>
                        </p>
                      </div>
                    </div>
                    <p className="pt-6">
                      <i>" {item.feedback} "</i>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
