"use client";

import { useState } from "react";
import Link from "next/link";

type IngredientRow = {
  id: number;
  quantity: string;
  name: string;
};

export default function CreateRecipePage() {
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("Japanese");
  const [category, setCategory] = useState("quick-meals");
  const [prepTime, setPrepTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [servings, setServings] = useState("2 servings");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { id: 1, quantity: "2 tbsp", name: "Soy sauce" },
    { id: 2, quantity: "1 cup", name: "Dashi broth" },
  ]);
  const [instructions, setInstructions] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const addIngredientRow = () => {
    setIngredients((prev) => [
      ...prev,
      { id: Date.now(), quantity: "", name: "" },
    ]);
  };

  const removeIngredientRow = (id: number) => {
    setIngredients((prev) => prev.filter((row) => row.id !== id));
  };

  const updateIngredient = (
    id: number,
    field: "quantity" | "name",
    value: string
  ) => {
    setIngredients((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Add New Recipe</h1>
        <p className="text-sm text-gray-600">
          Create and share a new recipe with the community.
        </p>
      </div>

      {savedSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md text-sm">
          Recipe submitted successfully! (Saved locally in preview state)
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Garlic Butter Noodles"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Cuisine & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cuisine
            </label>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
              <option value="Korean">Korean</option>
              <option value="Italian">Italian</option>
              <option value="American">American</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="quick-meals">Quick Meals</option>
              <option value="plant-based">Plant-Based</option>
              <option value="baking-grains">Baking & Grains</option>
              <option value="soups-stews">Soups & Stews</option>
            </select>
          </div>
        </div>

        {/* Prep Time & Difficulty */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prep Time
            </label>
            <input
              type="text"
              required
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              placeholder="e.g. 20m"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Servings
            </label>
            <input
              type="text"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              placeholder="e.g. 2 servings"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description of the dish..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Ingredients Builder */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Ingredients
            </label>
            <button
              type="button"
              onClick={addIngredientRow}
              className="text-xs text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
            >
              + Add Ingredient
            </button>
          </div>

          <div className="space-y-2">
            {ingredients.map((item) => (
              <div key={item.id} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Quantity (e.g. 1 cup)"
                  value={item.quantity}
                  onChange={(e) =>
                    updateIngredient(item.id, "quantity", e.target.value)
                  }
                  className="w-1/3 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Ingredient name"
                  value={item.name}
                  onChange={(e) =>
                    updateIngredient(item.id, "name", e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredientRow(item.id)}
                    className="px-2.5 text-gray-400 hover:text-red-500 text-sm cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instructions
          </label>
          <textarea
            rows={4}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Step 1: Prep ingredients...&#10;Step 2: Heat pan..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Link
            href="/recipes"
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-medium cursor-pointer"
          >
            Save Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
