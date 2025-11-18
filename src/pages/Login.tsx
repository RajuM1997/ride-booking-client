import { LoginForm } from "@/components/modules/Authentication/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import loginImg from "@/assets/ride-booking.jpg";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <title>
        <title>GoTogether-Login-Page</title>
      </title>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            GoTogether
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className=" relative h-full hidden md:block">
        <img
          src={loginImg}
          alt="Image"
          className="h-full w-full object-cover"
        />
        <Link
          to="/"
          className="hidden lg:block text-[#5DA600] text-lg font-bold absolute top-5 left-5"
        >
          <h3>
            <i>GoTogether</i>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Login;
