import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import { GalleryVerticalEnd } from "lucide-react";
import map from "@/assets/ride-booking.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterFormDriver } from "@/components/modules/Authentication/RegisterFormDriver";
const Register = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img src={map} alt="Image" className=" h-full w-full object-cover" />
        <h3 className="hidden lg:block text-[#5DA600] text-lg font-bold absolute top-5 left-5">
          <i>GoTogether</i>
        </h3>
      </div>
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
          <div className="w-full ">
            {/* <div className="text-center py-5">
              <h3 className="text-2xl font-bold ">Register Your Account</h3>
              <p className="text-sm text-muted-foreground py-3">
                Enter your details below to create an account and start your
                journey with GoTogether. Whether you’re a rider or a driver,
                signing up is quick and easy.
              </p>
            </div> */}
            <Tabs defaultValue="rider">
              <TabsList className="w-full max-w-[400px] mx-auto">
                <TabsTrigger value="rider">Sign up for Rider</TabsTrigger>
                <TabsTrigger value="driver">Sign up for Driver</TabsTrigger>
              </TabsList>
              <TabsContent value="rider" className="pt-5">
                <div className="">
                  <RegisterForm />
                </div>
              </TabsContent>
              <TabsContent value="driver">
                <RegisterFormDriver />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
