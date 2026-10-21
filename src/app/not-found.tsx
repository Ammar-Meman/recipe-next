import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-16 px-4">
      <span className="text-5xl font-extrabold text-orange-600 block mb-2">404</span>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Recipe Not Found</h1>
      <p className="text-sm text-gray-600 mb-6">
        Sorry, the recipe or page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/recipes"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm px-4 py-2 rounded-md transition-colors"
      >
        Back to All Recipes
      </Link>
    </div>
  );
}
