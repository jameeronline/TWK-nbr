import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "./src/index.html",
        details: "./src/details.html",
        selectAddress: "./src/select-address.html",
      },
    },
  },
  server: {
    port: 8080,
  },
};
