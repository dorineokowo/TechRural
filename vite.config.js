import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5001", // Forward API requests to the backend
    },
  },
});
