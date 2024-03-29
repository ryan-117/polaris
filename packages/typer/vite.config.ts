const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const { defineConfig } = require("vite");
const packageObj = require("./package.json");

const entry = path.resolve(__dirname, "src/index.ts");

module.exports = defineConfig({
  plugins: [
    typescript({
      target: "es5",
      include: ["src/**/*.ts"],
      esModuleInterop: true,
      module: "esnext",
    }),
  ],
  build: {
    sourcemap: true,
    outDir: "dist",
    minify: "esbuild",
    emptyOutDir: true,
    lib: {
      entry,
      name: "Typer",
      formats: ["umd", "cjs", "es"],
      // fileName: () => {},
    },
    rollupOptions: {
      input: entry,
      output: {
        exports: "auto",
      },
    },
  },
  server: {
    open: true,
  },
});
