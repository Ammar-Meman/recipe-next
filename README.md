# Everyday Recipes

A frontend recipe web application built with **Next.js 15 (App Router)** and **Tailwind CSS**.

---

## 🚀 How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser:
   ```
   http://localhost:3000
   ```

---

## 📁 Routes Included

| Route | Page | Description |
|---|---|---|
| `/` | Root | Automatically redirects to `/recipes` |
| `/recipes` | Recipes Catalog | Category filters (All, Quick Meals, Plant-Based, etc.) and recipe cards |
| `/recipes/[id]` | Recipe Detail | Dynamic route showing ingredients with interactive checklist and step-by-step instructions |
| `/cuisines` | Cuisines | Regional cuisines directory and featured recipes |
| `/create-recipe` | Add Recipe | Form with dynamic ingredient row inputs to create a recipe |
| `/about` | About | Project overview, tech stack, and route explanation |
| `/not-found` | 404 | Custom 404 page when a recipe or route is not found |

---

## 🧩 Components

- **`Navbar.tsx`**: Header with logo, navigation links, active route highlight, and Add Recipe button.
- **`Footer.tsx`**: Simple footer with copyright and quick navigation links.
- **`RecipeCard.tsx`**: Reusable card component showing dish image, tags, prep time, difficulty, and link.
- **`CuisineCard.tsx`**: Card for cuisine categories showing recipe count and main ingredients.
- **`IngredientList.tsx`**: Client component with interactive checkboxes to cross off ingredients.

---

## ⚡ Rendering Strategies

- **Static Site Generation (SSG)**: `/recipes/[id]` uses `generateStaticParams()` to pre-render recipe pages at build time.
- **Dynamic Metadata**: `/recipes/[id]` generates dynamic SEO titles and descriptions using `generateMetadata()`.
- **Client Components**: Used for interactivity where state is needed (`IngredientList` checkboxes, `Navbar` active links, filter tabs, dynamic form rows).
- **Server Components**: Used for static pages, layouts, and data passing for faster initial load.

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
