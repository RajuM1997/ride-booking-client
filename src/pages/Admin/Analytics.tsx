import AdminRideDonutChart from "@/components/modules/Admin/AdminRideDonutChart";
import AdminRideChart from "@/components/modules/Admin/AdminRidesChart";
import AdminTotalRevenueAreaChart from "@/components/modules/Admin/AdminTotalRevenueAreaChart";
import ChartLoader from "@/components/modules/ChartLoader";
import { Card } from "@/components/ui/card";
import {
  useGetActiveDriverQuery,
  useGetCompleteRideQuery,
  useGetEachCompletedRideDriverQuery,
  useGetPerMonthRevenueQuery,
  useGetPerMonthRidesCountQuery,
  useGetRidersQuery,
} from "@/redux/features/admin/admin.api";
interface IRidePerMonth {
  ridesCount: number;
  month: string;
  year: number;
}
interface IRideRevenuePerMonth {
  earnings: number;
  month: string;
  year: number;
}
interface IEachCompletedRideDriver {
  completedRides: number;
  name: string;
  _id?: string;
}

const Analytics = () => {
  const { data: rideCountData, isLoading: rideCountLoading } =
    useGetPerMonthRidesCountQuery(undefined);
  const { data: revenueData, isLoading: revenueLoading } =
    useGetPerMonthRevenueQuery(undefined);
  const { data: activeDriverData, isLoading: activeDriverLoading } =
    useGetActiveDriverQuery(undefined);
  const { data: completeRideCount, isLoading: completeRideLoading } =
    useGetCompleteRideQuery(undefined);
  const { data: allRiderCount, isLoading: allRidersCountLoading } =
    useGetRidersQuery(undefined);

  const {
    data: eachCompleteRideDriverData,
    isLoading: eachCompleteRideDriverLoading,
  } = useGetEachCompletedRideDriverQuery(undefined);

  const ridesMonth =
    rideCountData?.data?.map((ride: IRidePerMonth) => ride.month) || [];
  const ridesCount =
    rideCountData?.data?.map((ride: IRidePerMonth) => ride.ridesCount) || [];

  const rideRevenueMonthEarning = [
    {
      name: "Earnings",
      data:
        revenueData?.data?.map(
          (rideRev: IRideRevenuePerMonth) => rideRev.earnings
        ) || [],
    },
  ];

  const rideRevenueMonth =
    revenueData?.data?.map(
      (month: IRideRevenuePerMonth) => `${month.month} ${month.year}`
    ) || [];

  const eachCompleteRideDriver =
    eachCompleteRideDriverData?.data?.map(
      (eachRide: IEachCompletedRideDriver) => ({
        x: eachRide.name,
        y: eachRide.completedRides,
      })
    ) || [];
  if (
    rideCountLoading ||
    revenueLoading ||
    activeDriverLoading ||
    completeRideLoading ||
    allRidersCountLoading
  ) {
    return <ChartLoader />;
  }
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 py-5">
        <title>GoTogether-Analytics-Page</title>
        {!activeDriverLoading && (
          <div className="col-span-12 md:col-span-4">
            <Card>
              <div className="text-center py-7">
                <h5 className="text-2xl font-semibold">Total Active Driver</h5>
                <h2 className="text-3xl font-bold pt-3">
                  {activeDriverData?.data}
                </h2>
              </div>
            </Card>
          </div>
        )}
        {!allRidersCountLoading && (
          <div className="col-span-12 md:col-span-4">
            <Card>
              <div className="text-center py-7">
                <h5 className="text-2xl font-semibold">Total Active Riders</h5>
                <h2 className="text-3xl font-bold pt-3">
                  {allRiderCount?.data?.ridersCount}
                </h2>
              </div>
            </Card>
          </div>
        )}
        {!completeRideLoading && (
          <div className="col-span-12 md:col-span-4">
            <Card>
              <div className="text-center py-7">
                <h5 className="text-2xl font-semibold">Total Complete Rides</h5>
                <h2 className="text-3xl font-bold pt-3">
                  {completeRideCount?.data}
                </h2>
              </div>
            </Card>
          </div>
        )}
        {!eachCompleteRideDriverLoading && (
          <div className="col-span-12">
            <Card>
              <div>
                <h2 className="text-2xl leading-tight px-4">Driver Activity</h2>
                <small className="px-4 leading-tight">
                  Each Driver Complete Rides
                </small>
              </div>
              <AdminRideChart data={eachCompleteRideDriver} />
            </Card>
          </div>
        )}
        {!rideCountLoading && (
          <div className="col-span-12 md:col-span-6">
            <Card className="h-full">
              <div>
                <h2 className="text-2xl leading-tight px-4">Ride Volume</h2>
                <small className="px-4 leading-tight">
                  Complete Rides Every Month
                </small>
              </div>
              <AdminRideDonutChart series={ridesCount} labels={ridesMonth} />
            </Card>
          </div>
        )}
        {!revenueLoading && (
          <div className="col-span-12 md:col-span-6">
            <Card>
              <div>
                <h2 className="text-2xl leading-tight px-4">Revenue Trends</h2>
                <small className="px-4 leading-tight">
                  Revenue Of Every Month
                </small>
              </div>
              <AdminTotalRevenueAreaChart
                series={rideRevenueMonthEarning}
                categories={rideRevenueMonth}
              />
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
