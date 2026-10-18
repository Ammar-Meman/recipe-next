import { redirect } from "next/navigation";

// Home page redirects to /recipes
export default function Home() {
  redirect("/recipes");
}
