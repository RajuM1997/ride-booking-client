import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetDriverEarningQuery } from "@/redux/features/driver/driver.api";
import EarningsBarChart from "./EarningBarChar";
import CircularChart from "./CircularChart";

interface IAllMonthEarning {
  earnings: number;
  month: string;
  year: number;
}

const EarningChart = () => {
  const { data, isLoading } = useGetDriverEarningQuery(undefined);
  const { data: userData } = useUserInfoQuery(undefined);
  const earnings =
    data?.data?.allMonths?.map((ear: IAllMonthEarning) => ear.earnings) || [];
  const monthsName =
    data?.data?.allMonths?.map(
      (ear: IAllMonthEarning) => `${ear.month} ${ear.year}`
    ) || [];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="flex justify-center items-center flex-col w-full min-h-[200px]">
          <CardHeader className="w-full text-center">
            <CardTitle>Total Earning</CardTitle>
            <h3 className="text-3xl pt-2">
              {userData?.data?.driver?.totalEarning}
            </h3>
          </CardHeader>
        </Card>
        <Card className="flex justify-center items-center flex-col w-full min-h-[200px]">
          <CardHeader className="w-full text-center">
            <CardTitle>Total Complete Rides</CardTitle>
            <h3 className="text-3xl pt-2">
              {userData?.data?.driver?.completedRides}
            </h3>
          </CardHeader>
        </Card>
      </div>
      {!isLoading && (
        <div className="grid grid-cols-12 gap-5 py-10">
          <div className="col-span-12 lg:col-span-5">
            <div>
              <h2 className="text-2xl leading-tight px-4">Total Earning</h2>
              <small className="px-4 leading-tight">Earning Of Per Month</small>
            </div>
            <CircularChart series={earnings} labels={monthsName} />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div>
              <h2 className="text-2xl leading-tight px-4">Complete Rides</h2>
              <small className="px-4 leading-tight">
                Complete Rides Per Weekly, Daily, Monthly
              </small>
            </div>
            <EarningsBarChart
              data={[
                { x: "Daily", y: data?.data?.today },
                {
                  x: "Weekly",
                  y: data?.data?.week,
                },
                { x: "Monthly", y: data?.data?.month },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EarningChart;
