import {build} from "esbuild"
import htmlPlugin from "@chialab/esbuild-plugin-html"

const buildOptions = {
  define: {
    "process.NODE_ENV": "production"
  },
  entryPoints: ["src/index.html"],
  loader: {
    ".scss": "css"
  },
  bundle: true,
  outdir: "public",
  minify: false,
  metafile: true,
  watch: true,
  plugins: [
    htmlPlugin()
  ]
}

await build(buildOptions).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})