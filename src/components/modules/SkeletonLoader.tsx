import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({ count = 6 }) {
  return (
    <div className="min-h-screen container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="p-5 rounded-xl  shadow-lg border border-gray-200/40 dark:border-gray-700/40"
        >
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <Skeleton circle={true} width={70} height={70} />
          </div>

          {/* Title */}
          <Skeleton height={20} width="60%" className="mx-auto mb-4" />

          {/* Paragraph lines */}
          <div className="space-y-2">
            <Skeleton height={14} />
            <Skeleton height={14} />
            <Skeleton height={14} width="80%" />
          </div>
        </div>
      ))}
    </div>
  );
}
