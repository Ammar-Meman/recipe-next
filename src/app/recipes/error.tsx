"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-md mx-auto text-center py-12 px-4">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          {error.message || "Failed to load recipes. Please try again."}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
