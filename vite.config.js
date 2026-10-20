import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Project site: https://<user>.github.io/Danler-Tech/
  // "/" loads JS/CSS from the domain root, so GitHub Pages shows a blank page.
  base: "/Danler-Tech/",
  plugins: [react()],
});
