import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">About Everyday Recipes</h1>
        <p className="text-sm text-gray-600">
          A frontend Next.js recipe management project.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Everyday Recipes is a responsive web application designed to demonstrate the core capabilities of the Next.js App Router, dynamic routing with <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">[id]</code>, static site generation, and reusable component structure with Tailwind CSS.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Recipe Catalog with category filtering (All, Quick Meals, Plant-Based, etc.)</li>
            <li>Dynamic Recipe Detail pages with ingredients checklist and step-by-step instructions</li>
            <li>Cuisines showcase highlighting regional recipes</li>
            <li>Create Recipe interactive form with dynamic ingredient inputs</li>
            <li>Fully responsive layout with desktop and mobile support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <strong className="block text-sm text-gray-900">Next.js 15</strong>
              <span className="text-xs text-gray-500">App Router</span>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <strong className="block text-sm text-gray-900">React 19</strong>
              <span className="text-xs text-gray-500">Components</span>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <strong className="block text-sm text-gray-900">TypeScript</strong>
              <span className="text-xs text-gray-500">Type safety</span>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <strong className="block text-sm text-gray-900">Tailwind CSS</strong>
              <span className="text-xs text-gray-500">Styling</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/recipes"
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            ← Back to recipes catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
