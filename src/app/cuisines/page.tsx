import { cuisinesData } from "@/data/cuisines";
import { recipesData } from "@/data/recipes";
import CuisineCard from "@/components/CuisineCard";
import RecipeCard from "@/components/RecipeCard";

export default function CuisinesPage() {
  const featuredRecipes = recipesData.slice(0, 3);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Cuisines</h1>
        <p className="text-sm text-gray-600">
          Discover recipes grouped by traditional cuisine styles and regional flavors.
        </p>
      </div>

      {/* Cuisines list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {cuisinesData.map((cuisine) => (
          <CuisineCard key={cuisine.id} cuisine={cuisine} />
        ))}
      </div>

      {/* Featured recipes */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} showSubtitleFormat={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
