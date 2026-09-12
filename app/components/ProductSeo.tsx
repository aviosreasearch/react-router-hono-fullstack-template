import type { MetaFunction } from "react-router";

type ProductOffer = {
  label: string;
  price: number;
};

type ProductSeoConfig = {
  name: string;
  title: string;
  description: string;
  image: string;
  offers: ProductOffer[];
};

const siteUrl = "https://aviospeptides.com";

export const productSeoConfigs = {
  "bpc-157": {
    name: "BPC-157 Research Peptide",
    title: "BPC-157 10 mg Research Peptide | Avios Research",
    description:
      "Explore BPC-157 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-bpc157-product.PNG",
    offers: [{ label: "10 mg", price: 49.99 }],
  },
  dsip: {
    name: "DSIP Research Peptide",
    title: "DSIP 10 mg Research Peptide | Avios Research",
    description:
      "Explore DSIP 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-dsip-product.PNG",
    offers: [{ label: "10 mg", price: 39.99 }],
  },
  epithalon: {
    name: "Epithalon Research Peptide",
    title: "Epithalon 10 mg Research Peptide | Avios Research",
    description:
      "Explore Epithalon 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-epithalon-product.PNG",
    offers: [{ label: "10 mg", price: 44.99 }],
  },
  "ghk-cu": {
    name: "GHK-Cu Research Peptide",
    title: "GHK-Cu Research Peptide 50–100 mg | Avios Research",
    description:
      "Explore GHK-Cu research peptide in 50 mg and 100 mg sizes with available lot documentation and fast U.S. shipping. Research use only.",
    image: "/ghk-cu-100mg.PNG",
    offers: [
      { label: "50 mg", price: 39.99 },
      { label: "100 mg", price: 59.99 },
    ],
  },
  glow: {
    name: "GLOW Research Blend",
    title: "GLOW 70 mg Research Blend | Avios Research",
    description:
      "Explore the GLOW 70 mg research blend containing GHK-Cu, BPC-157, and TB-500, with available lot documentation. Research use only.",
    image: "/avios-glow-product.PNG",
    offers: [{ label: "70 mg", price: 79.99 }],
  },
  "glp3-r": {
    name: "GLP3-R Research Peptide",
    title: "GLP3-R Research Peptide 10–50 mg | Avios Research",
    description:
      "Explore GLP3-R research peptide in 10 mg through 50 mg sizes with available lot documentation and fast U.S. shipping. Research use only.",
    image: "/avios-glp3r-product.PNG",
    offers: [
      { label: "10 mg", price: 49.99 },
      { label: "15 mg", price: 69.99 },
      { label: "20 mg", price: 89.99 },
      { label: "30 mg", price: 119.99 },
      { label: "40 mg", price: 159.99 },
      { label: "50 mg", price: 189.99 },
    ],
  },
  ipamorelin: {
    name: "Ipamorelin Research Peptide",
    title: "Ipamorelin 10 mg Research Peptide | Avios Research",
    description:
      "Explore Ipamorelin 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-ipamorelin-product.PNG",
    offers: [{ label: "10 mg", price: 39.99 }],
  },
  "melanotan-ii": {
    name: "Melanotan II Research Peptide",
    title: "Melanotan II 10 mg Research Peptide | Avios Research",
    description:
      "Explore Melanotan II 10 mg from Avios Research with clear product information and fast U.S. shipping. For qualified research use only.",
    image: "/avios-melanotanII-product.PNG",
    offers: [{ label: "10 mg", price: 39.99 }],
  },
  "mots-c": {
    name: "MOTS-C Research Peptide",
    title: "MOTS-C Research Peptide 10–20 mg | Avios Research",
    description:
      "Explore MOTS-C research peptide in 10 mg and 20 mg sizes from Avios Research, with available lot documentation and fast U.S. shipping. Research use only.",
    image: "/avios-motsc-product.PNG",
    offers: [
      { label: "10 mg", price: 39.99 },
      { label: "20 mg", price: 54.99 },
    ],
  },
  "nad-plus": {
    name: "NAD+ Research Material",
    title: "NAD+ Research Material 500–1000 mg | Avios Research",
    description:
      "Explore NAD+ research material in 500 mg and 1000 mg sizes with available lot documentation and fast U.S. shipping. Research use only.",
    image: "/avios-nad-product.PNG",
    offers: [
      { label: "500 mg", price: 54.99 },
      { label: "1000 mg", price: 89.99 },
    ],
  },
  semaglutide: {
    name: "Semaglutide Research Peptide",
    title: "Semaglutide 20 mg Research Peptide | Avios Research",
    description:
      "Explore Semaglutide 20 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-semaglutide-product.PNG",
    offers: [{ label: "20 mg", price: 44.99 }],
  },
  semax: {
    name: "Semax Research Peptide",
    title: "Semax 10 mg Research Peptide | Avios Research",
    description:
      "Explore Semax 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-semax-product.PNG",
    offers: [{ label: "10 mg", price: 39.99 }],
  },
  sermorelin: {
    name: "Sermorelin Research Peptide",
    title: "Sermorelin 10 mg Research Peptide | Avios Research",
    description:
      "Explore Sermorelin 10 mg from Avios Research with clear product information and fast U.S. shipping. For qualified research use only.",
    image: "/avios-sermorelin-product.PNG",
    offers: [{ label: "10 mg", price: 44.99 }],
  },
  "ss-31": {
    name: "SS-31 Research Peptide",
    title: "SS-31 10 mg Research Peptide | Avios Research",
    description:
      "Explore SS-31 10 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-ss-31-product.PNG",
    offers: [{ label: "10 mg", price: 44.99 }],
  },
  tesamorelin: {
    name: "Tesamorelin Research Peptide",
    title: "Tesamorelin 5 mg Research Peptide | Avios Research",
    description:
      "Explore Tesamorelin 5 mg from Avios Research with available lot documentation, transparent product details, and fast U.S. shipping. Research use only.",
    image: "/avios-tesamorelin-product.PNG",
    offers: [{ label: "5 mg", price: 44.99 }],
  },
  trzp: {
    name: "TRZP Research Peptide",
    title: "TRZP Research Peptide 10–30 mg | Avios Research",
    description:
      "Explore TRZP research peptide in 10 mg, 20 mg, and 30 mg sizes with available lot documentation and fast U.S. shipping. Research use only.",
    image: "/avios-trzp-product.PNG",
    offers: [
      { label: "10 mg", price: 54.99 },
      { label: "20 mg", price: 79.99 },
      { label: "30 mg", price: 109.99 },
    ],
  },
  "wolverine-blend": {
    name: "Wolverine Research Blend",
    title: "Wolverine 10 mg Research Blend | Avios Research",
    description:
      "Explore the Wolverine 10 mg research blend containing BPC-157 and TB-500, with clear product information and fast U.S. shipping. Research use only.",
    image: "/avios-wolverine-product.PNG",
    offers: [{ label: "10 mg total", price: 54.99 }],
  },
} satisfies Record<string, ProductSeoConfig>;

export type ProductSeoSlug = keyof typeof productSeoConfigs;

export function buildProductMeta(slug: ProductSeoSlug): MetaFunction {
  return () => {
    const product = productSeoConfigs[slug];
    const pageUrl = `${siteUrl}/products/${slug}`;
    const imageUrl = `${siteUrl}${product.image}`;

    return [
      { title: product.title },
      { name: "description", content: product.description },
      { tagName: "link", rel: "canonical", href: pageUrl },
      { property: "og:title", content: product.title },
      { property: "og:description", content: product.description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: product.title },
      { name: "twitter:description", content: product.description },
      { name: "twitter:image", content: imageUrl },
    ];
  };
}

export function ProductSeo({ slug }: { slug: ProductSeoSlug }) {
  const product = productSeoConfigs[slug];
  const pageUrl = `${siteUrl}/products/${slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    sku: slug.toUpperCase(),
    category: "Research Peptides",
    brand: { "@type": "Brand", name: "Avios Research" },
    offers: product.offers.map((offer) => ({
      "@type": "Offer",
      name: `${product.name} ${offer.label}`,
      url: pageUrl,
      priceCurrency: "USD",
      price: offer.price.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
