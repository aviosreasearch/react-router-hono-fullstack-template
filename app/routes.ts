
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/glp3-r", "routes/products.glp3-r.tsx"),
  route("products/mots-c", "routes/products.mots-c.tsx"),
  route("products/nad-plus", "routes/products.nad-plus.tsx"),
  route("products/ghk-cu", "routes/products.ghk-cu.tsx"),
] satisfies RouteConfig;
