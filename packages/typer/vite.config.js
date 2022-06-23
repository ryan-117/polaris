const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const { defineConfig } = require("vite");
const package = require("./package.json");

const entry = path.resolve(__dirname, "src/index.ts");

module.exports = defineConfig({
  plugins: [
    typescript({
      target: "es5",
      include: ["src/**/*.ts"],
      exModuleInterop: true,
      module: "esnext",
    }),
  ],
  build: {
    sourcemap: true,
    outDir: "dist",
    minify: "esbuild",
    lib: {
      entry,
      name: package.name,
      formats: ["umd", "cjs", "es"],
      // fileName: () => {},
    },
    rollupOptions: {
      input: entry,
      ouput: {
        exports: "auto",
      },
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
