export default function Loading() {
  return (
    <div>
      {/* Header skeleton */}
      <div className="mb-6">
        <div className="h-7 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-72 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Filter skeleton */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div>
        ))}
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden p-4 space-y-3"
          >
            <div className="h-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
