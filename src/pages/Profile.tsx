import { Card, CardContent, CardTitle } from "@/components/ui/card";
import user1 from "@/assets/user-1.jpeg";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import UpdateProfileModal from "@/components/modules/UpdateProfileModal";
import ChangePassword from "@/components/modules/Authentication/ChangePasswordModal";
import SkeletonLoader from "@/components/modules/Loader";

const Profile = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);
  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <div className="w-full h-full ">
      <div className="w-full grid grid-cols-12 mx-auto gap-5">
        <Card className="py-0 gap-0 col-span-5">
          <div className="ml-auto pr-5 pt-5">
            <UpdateProfileModal profileData={data?.data} />
          </div>
          <CardContent className="p-5">
            <div className="flex pt-5 flex-col gap-6 items-center ">
              <img
                src={user1}
                alt=""
                className="w-22 h-22 rounded-full object-cover"
              />
              <div>
                <span className="text-1xl font-semibold">
                  Welcome {data?.data?.name}
                </span>
              </div>
            </div>
          </CardContent>
          {data?.data?.role === "DRIVER" && (
            <div className="flex justify-between gap-5 p-4">
              <div className="backdrop-blur-md min-w-[150px] lg:w-full border border-white/10 shadow-xl p-5 rounded-2xl">
                <p>Total Earning</p>
                <h3 className="text-2xl pt-2">
                  ৳ {data?.data?.driver?.totalEarning}
                </h3>
              </div>
              <div className="backdrop-blur-md min-w-[150px] lg:w-full border border-white/10 shadow-xl p-6 rounded-2xl">
                <p>Complete Ride</p>
                <h3 className="text-2xl pt-2">
                  {data?.data?.driver?.completedRides}
                </h3>
              </div>
            </div>
          )}
          <div className="flex flex-1 justify-end items-end  gap-5 p-4">
            <ChangePassword />
            <Button className="bg-red-400">Logout</Button>
          </div>
        </Card>

        <Card className="py-0 gap-0 col-span-7">
          <CardTitle className="p-5 capitalize">
            {data?.data?.role} Info
          </CardTitle>
          {data?.data?.role !== "DRIVER" && (
            <Card className="p-5 my-3 gap-0 mx-5">
              <small className="text-sm font-normal pb-0 my-0">Name</small>
              <p>{data?.data?.name}</p>
            </Card>
          )}
          <Card className="p-5 my-3 gap-0 mx-5">
            <small className="text-sm font-normal pb-0 my-0">Email</small>
            <p>{data?.data?.email}</p>
          </Card>
          <Card className="p-5 my-3 gap-0 mx-5">
            <small className="text-sm font-normal pb-0 my-0">Phone</small>
            <p>{data?.data?.phone}</p>
          </Card>

          {data?.data?.role === "DRIVER" && (
            <>
              <Card className="p-5 my-3 gap-0 mx-5">
                <small className="text-sm font-normal pb-0 my-0">
                  License Number
                </small>
                <p>{data?.data?.driver?.licenseNumber}</p>
              </Card>
              <Card className="p-5 my-3 gap-0 mx-5">
                <small className="text-sm font-normal pb-0 my-0">
                  Vehicle Type
                </small>
                <p>{data?.data?.driver?.vehicleType}</p>
              </Card>
              <Card className="p-5 my-3 gap-0 mx-5">
                <small className="text-sm font-normal pb-0 my-0">
                  Vehicle Number
                </small>
                <p>{data?.data?.driver?.vehicleNumber}</p>
              </Card>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Profile;
