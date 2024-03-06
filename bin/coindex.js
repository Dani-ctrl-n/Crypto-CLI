#!/usr/bin/env node
// import { program } from "commander";
// import { pkg } from "../package.json";

const { program } = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "manage API Key --https://coinmarketcap.com")
  .parse(process.argv);
