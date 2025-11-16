import Skeleton from "react-loading-skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen gap-4 p-4">
      {/* Sidebar */}
      <div className="w-64 hidden md:block bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
        <Skeleton height={40} width="80%" className="mb-6" />
        <div className="space-y-4">
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} width="70%" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-6">
        {/* Top Header */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 flex justify-between">
          <Skeleton height={30} width="30%" />
          <Skeleton circle height={40} width={40} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md"
            >
              <Skeleton height={20} width="50%" className="mb-3" />
              <Skeleton height={30} width="80%" />
            </div>
          ))}
        </div>

        {/* Table/List Skeleton */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
          <Skeleton height={30} width="25%" className="mb-4" />

          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4">
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} width="60%" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
