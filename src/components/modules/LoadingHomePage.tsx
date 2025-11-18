import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingHomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-400 p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <Skeleton width={120} height={40} />
        <div className="flex space-x-4">
          <Skeleton width={80} height={30} />
          <Skeleton width={80} height={30} />
          <Skeleton width={80} height={30} />
        </div>
      </div>

      <div className="w-full rounded-xl overflow-hidden mb-6">
        <Skeleton height={200} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-400 rounded-xl shadow-md p-4"
          >
            <Skeleton height={30} width="60%" className="mb-4" />
            <Skeleton count={3} className="mb-2" />
            <Skeleton width="50%" height={20} />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Skeleton height={40} width="40%" className="mb-4" />{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-400 rounded-xl shadow-md p-4"
            >
              <Skeleton height={20} className="mb-2" />
              <Skeleton count={2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingHomePage;
