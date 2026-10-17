import { Recipe } from "@/types/recipe";

// All recipe data used throughout the app
export const recipesData: Recipe[] = [
  {
    id: "1",
    slug: "vegetable-noodles",
    title: "Vegetable Noodles",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Asian",
    prepTime: "20 mins",
    difficulty: "Easy",
    servings: "2 portions",
    description:
      "A quick weeknight stir-fry utilizing tender flat noodles, crisp julienned seasonal vegetables, and a balanced savory soy-sesame reduction.",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1080&q=80",
    tag: "Quick Prep",
    entryNumber: "Entry #042 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 portions",
    ingredients: [
      { id: "i1", quantity: "200g", name: "wheat noodles or soba" },
      { id: "i2", quantity: "1 tbsp", name: "toasted sesame oil" },
      { id: "i3", quantity: "1 small", name: "carrot, julienned" },
      { id: "i4", quantity: "1", name: "red bell pepper, thinly sliced" },
      { id: "i5", quantity: "2 cups", name: "shredded savoy cabbage" },
      { id: "i6", quantity: "2", name: "scallions, diagonally sliced" },
      { id: "i7", quantity: "2 tbsp", name: "low-sodium soy sauce" },
      { id: "i8", quantity: "1 tbsp", name: "dark soy sauce" },
      { id: "i9", quantity: "1 tsp", name: "grated ginger" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Par-boil & oil noodles",
        description:
          "Cook noodles in salted boiling water until al dente, drain and toss lightly with half the sesame oil.",
      },
      {
        stepNumber: "02",
        title: "Preheat wok",
        description:
          "Heat a wide skillet or wok over medium-high heat with remaining oil until shimmering.",
      },
      {
        stepNumber: "03",
        title: "Flash aromatics and root vegetables",
        description:
          "Add ginger, julienned carrot, and bell pepper; stir-fry briskly for 3 minutes until tender-crisp.",
      },
      {
        stepNumber: "04",
        title: "Incorporate greens & seasoning reduction",
        description:
          "Fold in the shredded cabbage and noodles; pour in light and dark soy sauces.",
      },
      {
        stepNumber: "05",
        title: "Glaze reduction and finish",
        description:
          "Toss continuously for 2 minutes to glaze evenly, finish with sliced scallions and remove from heat.",
      },
    ],
  },
  {
    id: "2",
    slug: "brown-butter-garlic-noodles",
    title: "Brown Butter Garlic Noodles",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Pan-Asian",
    prepTime: "15 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description:
      "Savory egg noodles emulsified with nut-browned butter, pulverized garlic, scallions, and toasted sesame seeds.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    tag: "Pan-Asian",
    entryNumber: "Entry #018 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "b1", quantity: "250g", name: "fresh egg noodles" },
      { id: "b2", quantity: "3 tbsp", name: "unsalted butter" },
      { id: "b3", quantity: "5 cloves", name: "fresh garlic, finely minced" },
      {
        id: "b4",
        quantity: "1.5 tbsp",
        name: "oyster sauce or mushroom sauce",
      },
      { id: "b5", quantity: "1 tbsp", name: "parmesan or pecorino cheese" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Boil Noodles",
        description:
          "Boil egg noodles according to package instructions until chewy and tender.",
      },
      {
        stepNumber: "02",
        title: "Brown the Butter",
        description:
          "Melt butter over medium heat until foamy and lightly golden brown with a nutty fragrance.",
      },
      {
        stepNumber: "03",
        title: "Emulsify Sauce",
        description:
          "Add garlic, soy sauce, and noodles with a splash of pasta water, tossing vigorously.",
      },
    ],
  },
  {
    id: "3",
    slug: "skillet-shakshuka-feta",
    title: "Skillet Shakshuka with Feta",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Levantine",
    prepTime: "20 mins",
    difficulty: "Medium",
    servings: "3 servings",
    description:
      "Gently poached farm eggs in a robust reduction of roasted peppers, crushed Roma tomatoes, and aromatic cumin topped with creamy feta.",
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    tag: "Levantine",
    entryNumber: "Entry #029 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 3 servings",
    ingredients: [
      { id: "s1", quantity: "4 large", name: "pasture-raised eggs" },
      {
        id: "s2",
        quantity: "1 can (400g)",
        name: "crushed san marzano tomatoes",
      },
      { id: "s3", quantity: "1 large", name: "bell pepper, diced" },
      { id: "s4", quantity: "75g", name: "crumbled greek feta" },
      {
        id: "s5",
        quantity: "1 tsp",
        name: "ground cumin & smoked paprika",
      },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Simmer Sauce",
        description:
          "Saute bell peppers, garlic, and spices, then pour in tomatoes and simmer until thick.",
      },
      {
        stepNumber: "02",
        title: "Poach Eggs",
        description:
          "Create wells in sauce, crack in eggs, cover and cook gently for 5-7 minutes.",
      },
      {
        stepNumber: "03",
        title: "Garnish",
        description:
          "Scatter crumbled feta, fresh herbs, and a drizzle of olive oil before serving with crusty bread.",
      },
    ],
  },
  {
    id: "4",
    slug: "miso-glazed-eggplant",
    title: "Miso-Glazed Eggplant",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Japanese",
    prepTime: "30 mins",
    difficulty: "Medium",
    servings: "2 servings",
    description:
      "Roasted Japanese eggplant with a sweet white miso and mirin glaze, topped with sesame seeds and thinly sliced scallions.",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    tag: "Japanese",
    entryNumber: "Entry #057 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "m1", quantity: "2 large", name: "Japanese or Italian eggplants" },
      { id: "m2", quantity: "3 tbsp", name: "white miso paste (shiro miso)" },
      { id: "m3", quantity: "2 tbsp", name: "mirin" },
      { id: "m4", quantity: "1 tbsp", name: "rice vinegar" },
      { id: "m5", quantity: "1 tbsp", name: "toasted sesame seeds" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Score & Roast",
        description:
          "Halve eggplants, score deeply in a crosshatch pattern, brush with oil, and roast at 200°C for 20 minutes.",
      },
      {
        stepNumber: "02",
        title: "Prepare Miso Glaze",
        description:
          "Whisk together white miso, mirin, rice vinegar, and a touch of sugar until smooth.",
      },
      {
        stepNumber: "03",
        title: "Glaze & Broil",
        description:
          "Brush the miso glaze generously over roasted eggplant halves and broil for 3-4 minutes until bubbling.",
      },
    ],
  },
  {
    id: "5",
    slug: "crispy-tofu-bowl",
    title: "Crispy Tofu Rice Bowl",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Asian Fusion",
    prepTime: "25 mins",
    difficulty: "Easy",
    servings: "2 bowls",
    description:
      "Crispy pan-fried tofu cubes served over fluffy jasmine rice with pickled vegetables, avocado, and a tangy sriracha-lime drizzle.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tag: "Vegan",
    entryNumber: "Entry #063 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 bowls",
    ingredients: [
      { id: "t1", quantity: "400g", name: "extra-firm tofu, pressed and cubed" },
      { id: "t2", quantity: "2 tbsp", name: "cornstarch" },
      { id: "t3", quantity: "1 cup", name: "jasmine rice" },
      { id: "t4", quantity: "1", name: "avocado, sliced" },
      { id: "t5", quantity: "2 tbsp", name: "sriracha-lime sauce" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Press & Coat Tofu",
        description:
          "Press tofu for 15 minutes, cut into cubes, and toss with cornstarch and a pinch of salt.",
      },
      {
        stepNumber: "02",
        title: "Pan-Fry Until Crispy",
        description:
          "Pan-fry tofu in oil over medium-high heat for 3-4 minutes per side until golden and crunchy.",
      },
      {
        stepNumber: "03",
        title: "Assemble Bowl",
        description:
          "Arrange rice, crispy tofu, sliced avocado, and pickled veggies in a bowl. Drizzle with sriracha-lime sauce.",
      },
    ],
  },
  {
    id: "6",
    slug: "rustic-tomato-galette",
    title: "Rustic Tomato Galette",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "French",
    prepTime: "45 mins",
    difficulty: "Hard",
    servings: "4 slices",
    description:
      "A free-form rustic pastry tart filled with heirloom tomatoes, caramelized shallots, fresh thyme, and a honey-dijon glaze on flaky butter crust.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    tag: "French",
    entryNumber: "Entry #071 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 slices",
    ingredients: [
      { id: "g1", quantity: "1 sheet", name: "puff pastry or homemade dough" },
      { id: "g2", quantity: "3-4", name: "heirloom tomatoes, sliced" },
      { id: "g3", quantity: "2", name: "shallots, thinly sliced" },
      { id: "g4", quantity: "2 tbsp", name: "dijon mustard" },
      { id: "g5", quantity: "1 tbsp", name: "honey" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare Crust",
        description:
          "Roll out pastry dough into a rough circle on parchment paper, leaving edges rustic.",
      },
      {
        stepNumber: "02",
        title: "Layer Filling",
        description:
          "Spread dijon mustard, then layer tomato slices and caramelized shallots, leaving a 2-inch border.",
      },
      {
        stepNumber: "03",
        title: "Fold & Bake",
        description:
          "Fold edges over filling, brush with egg wash and honey, bake at 200°C for 25-30 minutes until golden.",
      },
    ],
  },
  {
    id: "7",
    slug: "thai-coconut-soup",
    title: "Thai Coconut Soup (Tom Kha)",
    category: "soups-stews",
    categoryLabel: "Soups & Stews",
    cuisine: "Thai",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 bowls",
    description:
      "A fragrant and creamy Thai coconut soup with lemongrass, galangal, mushrooms, and a squeeze of fresh lime. Comforting and deeply aromatic.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    tag: "Thai",
    entryNumber: "Entry #088 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 bowls",
    ingredients: [
      { id: "tk1", quantity: "2 cans", name: "full-fat coconut milk" },
      { id: "tk2", quantity: "2 stalks", name: "lemongrass, bruised" },
      { id: "tk3", quantity: "200g", name: "oyster mushrooms, torn" },
      { id: "tk4", quantity: "2 tbsp", name: "fish sauce (or soy sauce)" },
      { id: "tk5", quantity: "2", name: "fresh limes, juiced" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Infuse Aromatics",
        description:
          "Simmer coconut milk with lemongrass, galangal slices, and kaffir lime leaves for 10 minutes.",
      },
      {
        stepNumber: "02",
        title: "Add Vegetables",
        description:
          "Add mushrooms, cherry tomatoes, and tofu or chicken. Cook for 8-10 minutes until tender.",
      },
      {
        stepNumber: "03",
        title: "Season & Serve",
        description:
          "Remove from heat, stir in fish sauce and lime juice. Garnish with cilantro and chili oil.",
      },
    ],
  },
  {
    id: "8",
    slug: "sourdough-focaccia",
    title: "Sourdough Focaccia",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "Italian",
    prepTime: "60 mins",
    difficulty: "Hard",
    servings: "8 pieces",
    description:
      "Airy, olive oil-drenched sourdough focaccia with flaky sea salt, fresh rosemary, and a beautiful golden crust. Slow-fermented for maximum flavor.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tag: "Italian",
    entryNumber: "Entry #095 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 8 pieces",
    ingredients: [
      { id: "f1", quantity: "500g", name: "bread flour" },
      { id: "f2", quantity: "150g", name: "active sourdough starter" },
      { id: "f3", quantity: "4 tbsp", name: "extra virgin olive oil" },
      { id: "f4", quantity: "10g", name: "flaky sea salt" },
      { id: "f5", quantity: "3 sprigs", name: "fresh rosemary" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mix & Autolyse",
        description:
          "Combine flour, water, and starter. Let rest 30 minutes, then add salt and olive oil. Fold every 30 minutes for 2 hours.",
      },
      {
        stepNumber: "02",
        title: "Cold Ferment",
        description:
          "Transfer to oiled container, cover, and refrigerate overnight (8-12 hours) for complex flavor development.",
      },
      {
        stepNumber: "03",
        title: "Dimple & Bake",
        description:
          "Pour into oiled pan, dimple with fingers, add rosemary and salt. Bake at 230°C for 22-25 minutes.",
      },
    ],
  },
  {
    id: "9",
    slug: "hearty-lentil-stew",
    title: "Hearty Lentil Stew",
    category: "soups-stews",
    categoryLabel: "Soups & Stews",
    cuisine: "Mediterranean",
    prepTime: "40 mins",
    difficulty: "Easy",
    servings: "6 bowls",
    description:
      "A warming, protein-rich lentil stew with carrots, celery, tomatoes, and warm spices. Perfect for meal prep and freezer-friendly.",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
    tag: "Mediterranean",
    entryNumber: "Entry #102 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 6 bowls",
    ingredients: [
      { id: "l1", quantity: "2 cups", name: "green or brown lentils, rinsed" },
      { id: "l2", quantity: "2", name: "carrots, diced" },
      { id: "l3", quantity: "2 stalks", name: "celery, chopped" },
      { id: "l4", quantity: "1 can (400g)", name: "diced tomatoes" },
      { id: "l5", quantity: "1 tsp", name: "cumin and coriander" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Sauté Aromatics",
        description:
          "Cook diced onion, carrots, and celery in olive oil for 5 minutes until softened.",
      },
      {
        stepNumber: "02",
        title: "Simmer Lentils",
        description:
          "Add lentils, tomatoes, broth, and spices. Bring to a boil, then simmer for 25-30 minutes until lentils are tender.",
      },
      {
        stepNumber: "03",
        title: "Season & Serve",
        description:
          "Adjust salt and pepper, stir in a squeeze of lemon juice. Serve with crusty bread and a drizzle of olive oil.",
      },
    ],
  },
  {
    id: "10",
    slug: "classic-banana-bread",
    title: "Classic Banana Bread",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "American",
    prepTime: "55 mins",
    difficulty: "Easy",
    servings: "8 slices",
    description:
      "Moist, tender banana bread with a golden crust, made with overripe bananas, brown sugar, and a hint of cinnamon and vanilla.",
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80",
    tag: "Classic",
    entryNumber: "Entry #110 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 8 slices",
    ingredients: [
      { id: "bb1", quantity: "3 large", name: "overripe bananas" },
      { id: "bb2", quantity: "1/3 cup", name: "melted butter" },
      { id: "bb3", quantity: "3/4 cup", name: "brown sugar" },
      { id: "bb4", quantity: "1.5 cups", name: "all-purpose flour" },
      { id: "bb5", quantity: "1 tsp", name: "vanilla extract" },
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mash & Mix Wet",
        description:
          "Mash bananas in a bowl, stir in melted butter, egg, brown sugar, and vanilla until combined.",
      },
      {
        stepNumber: "02",
        title: "Fold In Dry",
        description:
          "Gently fold in flour, baking soda, salt, and cinnamon. Do not over-mix.",
      },
      {
        stepNumber: "03",
        title: "Bake",
        description:
          "Pour into a greased loaf pan and bake at 175°C for 50-60 minutes until a toothpick comes out clean.",
      },
    ],
  },
];
