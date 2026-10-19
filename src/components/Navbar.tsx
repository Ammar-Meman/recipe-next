"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/recipes" && (pathname === "/" || pathname?.startsWith("/recipes"))) {
      return true;
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/recipes" className="flex items-center gap-2">
          <span className="w-8 h-8 bg-orange-600 text-white font-bold flex items-center justify-center rounded text-sm">
            ER
          </span>
          <span className="font-semibold text-gray-900 text-lg">
            Everyday Recipes
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/recipes"
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              isActive("/recipes")
                ? "bg-orange-50 text-orange-600 font-medium"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Recipes
          </Link>
          <Link
            href="/cuisines"
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              isActive("/cuisines")
                ? "bg-orange-50 text-orange-600 font-medium"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Cuisines
          </Link>
          <Link
            href="/about"
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              isActive("/about")
                ? "bg-orange-50 text-orange-600 font-medium"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            About
          </Link>
        </nav>

        <Link
          href="/create-recipe"
          className="inline-flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-3.5 py-1.5 rounded-md transition-colors"
        >
          <span>+</span>
          <span>New Recipe</span>
        </Link>
      </div>
    </header>
  );
}
