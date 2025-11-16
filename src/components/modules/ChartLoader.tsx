import Skeleton from "react-loading-skeleton";

export default function ChartLoader() {
  return (
    <div className="flex flex-col p-4 gap-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center  rounded-xl shadow-md p-4">
        <Skeleton height={30} width="30%" />
        <Skeleton circle height={40} width={40} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart Skeleton */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
          <Skeleton height={30} width="40%" className="mb-4" />
          <Skeleton height={200} />
        </div>

        {/* Pie Chart Skeleton */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
          <Skeleton height={30} width="40%" className="mb-4" />
          <div className="flex justify-center items-center h-[200px]">
            <Skeleton circle height={150} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
