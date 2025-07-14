import { defineConfig } from "@solidjs/start/config";
import path from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@/lib": path.resolve("./src/lib"),
        "@/components": path.resolve("./src/components"),
        "@/routes": path.resolve("./src/routes"),
        "@/hooks": path.resolve("./src/hooks"),
        "@/styles": path.resolve("./src/styles"),
        "@/contexts": path.resolve("./src/contexts"),
        "@/middleware": path.resolve("./src/middleware"),
      },
      extensions: [
        ".ts",
        ".tsx",
        ".js",
        ".jsx",
        ".json",
        ".txt",
        ".yaml",
        ".mjs",
        ".mts",
      ],
    },

    ssr: {
      noExternal: ["vinxi"],
      target: "node",
      external: [],
    },
  },
  ssr: true,
});
