import AdminRideChart from "@/components/modules/Admin/AdminRidesChart";
import {
  useGetPerMonthRevenueQuery,
  useGetPerMonthRidesCountQuery,
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

const Analytics = () => {
  const { data: rideCountData, isLoading: rideCountLoading } =
    useGetPerMonthRidesCountQuery(undefined);
  const { data: revenueData, isLoading: revenueLoading } =
    useGetPerMonthRevenueQuery(undefined);
  const rides =
    rideCountData?.data?.map((ride: IRidePerMonth) => ({
      x: ride.month,
      y: ride.ridesCount,
    })) || [];
  const rideRevenueMonthEarning =
    revenueData?.data?.map(
      (rideRev: IRideRevenuePerMonth) => rideRev.earnings
    ) || [];
  const rideRevenueMonth =
    revenueData?.data?.map(
      (month: IRideRevenuePerMonth) => `${month.month} ${month.year}`
    ) || [];
  console.log(revenueData);

  return (
    <div>
      <h2>Hello</h2>

      <div className="grid grid-cols-12 gap-5 py-10">
        {!revenueLoading && (
          <div className="col-span-5">
            {/* <CircularChart series={earnings} labels={monthsName} /> */}
          </div>
        )}
        {!rideCountLoading && (
          <div className="col-span-7">
            <AdminRideChart data={rides} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
