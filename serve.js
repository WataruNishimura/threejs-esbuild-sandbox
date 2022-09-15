import { serve } from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html"

const buildOptions = {
  entryPoints: ["src/index.html"],
  outdir: "public",
  bundle: true,
  assetNames: 'assets/[name]',
  chunkNames: '[ext]/[name]',
  minify: true,
  plugins: [
    htmlPlugin()
  ]
}

await serve({servedir: "public", port: 8000}, buildOptions)