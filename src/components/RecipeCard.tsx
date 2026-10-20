import Link from "next/link";
import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
  showSubtitleFormat?: boolean;
};

export default function RecipeCard({
  recipe,
  showSubtitleFormat = false,
}: RecipeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 text-xs">
          <span className="bg-orange-100 text-orange-700 font-medium px-2 py-0.5 rounded">
            {recipe.tag}
          </span>
          <span className="text-gray-500">{recipe.prepTime}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{recipe.difficulty}</span>
        </div>

        <h3 className="font-semibold text-gray-900 text-base mb-1">
          {recipe.title}
        </h3>

        {showSubtitleFormat ? (
          <p className="text-xs text-gray-500 mb-4">
            {recipe.cuisine} • {recipe.servings}
          </p>
        ) : (
          <p className="text-xs text-gray-600 mb-4 line-clamp-2">
            {recipe.description}
          </p>
        )}

        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-500">{recipe.servings}</span>
          <Link
            href={`/recipes/${recipe.id}`}
            className="text-orange-600 font-medium hover:text-orange-700"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}
