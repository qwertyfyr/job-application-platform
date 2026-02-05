import type { Route } from "./+types/home";
import { Dashboard } from "../dashboard/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to Dashboard!" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
