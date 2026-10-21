"use client";

import { useState } from "react";
import { recipesData } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

const categories = [
  { key: "all", label: "All" },
  { key: "quick-meals", label: "Quick Meals" },
  { key: "plant-based", label: "Plant-Based" },
  { key: "baking-grains", label: "Baking & Grains" },
  { key: "soups-stews", label: "Soups & Stews" },
];

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRecipes =
    activeFilter === "all"
      ? recipesData
      : recipesData.filter((recipe) => recipe.category === activeFilter);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Recipes</h1>
        <p className="text-sm text-gray-600">
          Explore delicious everyday recipes with simple step-by-step instructions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`px-3.5 py-1.5 text-sm rounded-md transition-colors cursor-pointer ${
              activeFilter === cat.key
                ? "bg-orange-600 text-white font-medium"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white border border-gray-200 rounded-lg">
          No recipes found in this category.
        </div>
      )}
    </div>
  );
}
