import { Cuisine } from "@/types/recipe";

// Cuisine data for the cuisines page
export const cuisinesData: Cuisine[] = [
  {
    id: "japanese",
    name: "Japanese Cuisine",
    recipeCount: 14,
    description:
      "Dashi bases, mirin, miso, and seasonal preservation techniques.",
    focus: "Kombu",
    focusLabel: "Primary base",
  },
  {
    id: "chinese",
    name: "Chinese Regional Styles",
    recipeCount: 22,
    description:
      "Wok aromatics, Sichuan peppercorn, and delicate dim sum preparation.",
    focus: "Wok Hei",
    focusLabel: "Primary technique",
  },
  {
    id: "korean",
    name: "Korean Traditions",
    recipeCount: 11,
    description:
      "Gochujang-based marinades, kimchi fermentation, and banchan culture.",
    focus: "Gochujang",
    focusLabel: "Primary paste",
  },
  {
    id: "taiwanese",
    name: "Taiwanese Street Food",
    recipeCount: 8,
    description:
      "Night market classics, braised meats, and bubble tea foundations.",
    focus: "Five-spice",
    focusLabel: "Primary blend",
  },
];
