import { Cuisine } from "@/types/recipe";

type CuisineCardProps = {
  cuisine: Cuisine;
};

export default function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{cuisine.name}</h3>
        <span className="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded font-medium">
          {cuisine.recipeCount} recipes
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4 flex-1">
        {cuisine.description}
      </p>

      <div className="text-xs text-gray-500 pt-3 border-t border-gray-100">
        <span className="font-medium text-gray-700">Key ingredients: </span>
        {cuisine.focus}
      </div>
    </div>
  );
}
