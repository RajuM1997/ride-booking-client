import Skeleton from "react-loading-skeleton";

export default function TableLoader() {
  return (
    <div>
      <div className=" rounded-xl bg-white min-h-screen dark:bg-gray-400 shadow-md p-4">
        <Skeleton height={30} width="25%" className="mb-4" />
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 items-center">
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} width="80%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
