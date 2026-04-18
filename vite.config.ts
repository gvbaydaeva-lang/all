import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Локально `./`; для GitHub Pages репозитория `all` задаётся `BASE_PATH=/all/` в CI */
const base = process.env.BASE_PATH?.trim() || "./";

export default defineConfig({
  plugins: [react()],
  base,
});
