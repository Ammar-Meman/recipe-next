import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { recipesData } from "@/data/recipes";
import IngredientList from "@/components/IngredientList";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return recipesData.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = recipesData.find((r) => r.id === id);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: `${recipe.title} — Everyday Recipes`,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipesData.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <Link href="/recipes" className="hover:text-gray-900">
          Recipes
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{recipe.title}</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded">
              {recipe.tag}
            </span>
            <span className="text-xs text-gray-500">{recipe.cuisine}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {recipe.title}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {recipe.description}
          </p>

          {/* Quick info */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-md border border-gray-100">
            <div>
              <span className="text-gray-400">Prep time: </span>
              <strong className="text-gray-800">{recipe.prepTime}</strong>
            </div>
            <div>
              <span className="text-gray-400">Difficulty: </span>
              <strong className="text-gray-800">{recipe.difficulty}</strong>
            </div>
            <div>
              <span className="text-gray-400">Servings: </span>
              <strong className="text-gray-800">{recipe.servings}</strong>
            </div>
          </div>
        </div>

        {/* Recipe image */}
        <div className="mb-8 rounded-lg overflow-hidden border border-gray-200">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
            Ingredients
          </h2>
          <IngredientList ingredients={recipe.ingredients} />
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Instructions
          </h2>
          <div className="space-y-4">
            {recipe.steps.map((step) => (
              <div key={step.stepNumber} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {step.stepNumber}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/recipes"
          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          ← Back to all recipes
        </Link>
      </div>
    </div>
  );
}
