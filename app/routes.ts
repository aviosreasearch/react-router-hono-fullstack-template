import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/glp3-r", "routes/products.glp3-r.tsx"),
  route("products/mots-c", "routes/products.mots-c.tsx"),
  route("products/semax", "routes/products.semax.tsx"),
  route("products/dsip", "routes/products.dsip.tsx"),
  route("products/nad-plus", "routes/products.nad-plus.tsx"),
  route("products/ghk-cu", "routes/products.ghk-cu.tsx"),
  route("research-use", "routes/research-use-policy.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("shipping", "routes/shipping.tsx"),
  route("returns", "routes/returns.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("cart", "routes/cart.tsx"),
] satisfies RouteConfig;
