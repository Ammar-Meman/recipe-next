"use client";

import { useState } from "react";
import { Ingredient } from "@/types/recipe";

type IngredientListProps = {
  ingredients: Ingredient[];
};

export default function IngredientList({ ingredients }: IngredientListProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ul className="space-y-2">
      {ingredients.map((item) => (
        <li key={item.id}>
          <label className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checkedIds.includes(item.id)}
              onChange={() => toggle(item.id)}
              className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
            />
            <span
              className={`text-sm ${
                checkedIds.includes(item.id)
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              <strong className="font-semibold text-gray-900">
                {item.quantity}
              </strong>{" "}
              {item.name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
