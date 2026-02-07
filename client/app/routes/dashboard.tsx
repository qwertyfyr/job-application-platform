import type { Route } from "./+types/home";
import { Page } from "../dashboard/page";
import { getListings } from "server/src/services/listing.service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to Dashboard!" },
  ];
}

const listings = await getListings();
export default function Home() {
  return <Page />;
}
