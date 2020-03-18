import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";
import fs from "fs";
import pkg from "./package.json";

function findTSFiles(root, inputFiles) {
  if (fs.existsSync(root)) {
    if (fs.lstatSync(root).isDirectory()) {
      fs.readdirSync(root)
        .forEach((filename) => {
          const p = `${root}/${filename}`;
          findTSFiles(p, inputFiles);
        });
    } else {
      if (root.match(/\.tsx?$/)) {
        if (!root.match(/\.(d|test|spec)\.ts/)) {
          inputFiles.push(root);
        }
      }
    }
  }
}

const inputFiles = [];
findTSFiles("src", inputFiles);
const dependencies = Object.keys(pkg.dependencies);

export default {
  input: inputFiles,
  output: {
    exports: "named",
    sourcemap: true,
    format: "esm",
    dir: "dist",
  },
  plugins: [
    external(),
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": ["isValidElementType"],
      },
    }),
    json(),
    multiInput({
      relative: "src/",
      transformOutputPath: (output) => {
        return `${output}`;
      },
    }),
  ],
  external: (id) => {
    return dependencies.includes(id);
  },
};
