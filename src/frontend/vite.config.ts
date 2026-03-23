import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { addImportPrefix } from "imports-prefix-vite-plugin";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    addImportPrefix({
      prefix: "/routelit/routelit_glide_data_grid/",
    }) as Plugin,
  ],
  define: {
    // Provide polyfill for process.env
    "process.env": {},
  },
  build: {
    outDir: "../routelit_glide_data_grid/static",
    emptyOutDir: true,
    manifest: true, // Generate manifest.json for asset tracking
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RoutelitGlideDataGrid",
      fileName: (format) => `routelit-glide-data-grid.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "routelit-client"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "routelit-client": "RoutelitClient",
        },
      },
    },
    minify: true,
    sourcemap: true,
  },
});
