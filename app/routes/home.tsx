import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Avios Research" },
    {
      name: "description",
      content: "Research compounds with lot traceability and documentation.",
    },
    { property: "og:title", content: "Avios Research" },
    {
      property: "og:description",
      content: "Research compounds with lot traceability and documentation.",
    },
    { property: "og:url", content: "https://aviospeptides.com" },
    { property: "og:type", content: "website" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
