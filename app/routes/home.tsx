import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  const title =
    "Research Peptides with COA Documentation | Avios Research";

  const description =
    "Explore research peptides from Avios Research with transparent documentation, lot traceability, secure checkout, and fast U.S. shipping. Research use only.";

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://aviospeptides.com/",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: "https://aviospeptides.com/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Avios Research",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
