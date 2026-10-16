// Type for a single ingredient in a recipe
export type Ingredient = {
  id: string;
  quantity: string;
  name: string;
};

// Type for a single cooking step
export type Step = {
  stepNumber: string;
  title: string;
  description: string;
};

// Main recipe type used across the app
export type Recipe = {
  id: string;
  slug: string;
  title: string;
  category: "quick-meals" | "plant-based" | "baking-grains" | "soups-stews";
  categoryLabel: string;
  cuisine: string;
  prepTime: string;
  difficulty: string;
  servings: string;
  description: string;
  image: string;
  tag: string;
  entryNumber: string;
  yieldInfo: string;
  ingredients: Ingredient[];
  steps: Step[];
};

// Type for cuisine cards on the cuisines page
export type Cuisine = {
  id: string;
  name: string;
  recipeCount: number;
  description: string;
  focus: string;
  focusLabel: string;
};
