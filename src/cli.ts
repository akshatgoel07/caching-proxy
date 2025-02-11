import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export function parseCLIArgs() {
  const argv = yargs(hideBin(process.argv))
    .option("port", {
      type: "number",
      description: "Port on which the caching proxy runs",
      default: 3000,
    })
    .option("origin", {
      type: "string",
      description: "Origin server URL",
      demandOption: true,
    })
    .option("clear-cache", {
      type: "boolean",
      description: "Clear the cache before starting",
      default: false,
    })
    .help()
    .alias("help", "h").argv;

  return argv;
}
