import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12 py-6 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Everyday Recipes — Next.js Project</p>
        <div className="flex gap-4">
          <Link href="/recipes" className="hover:text-gray-900">
            Recipes
          </Link>
          <Link href="/cuisines" className="hover:text-gray-900">
            Cuisines
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
