import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages project sites need a subpath (e.g. /repo-name/).
 * User/org site (repo named *.github.io) uses "/".
 * Custom domain later: set VITE_BASE_PATH=/ when building, or rely on default.
 */
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
});
