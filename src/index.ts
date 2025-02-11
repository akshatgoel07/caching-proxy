// src/index.ts
import { parseCLIArgs } from "./cli";
import { startServer } from "./server";
import { clearCache } from "./cache";

interface ParseCLI {
  port: number;
  origin: string;
  clearCache: boolean;
}

const { port, origin, clearCache: shouldClearCache }: any = parseCLIArgs();

if (shouldClearCache) {
  clearCache();
  console.log("✅ Cache cleared!");
}

startServer(port, origin);
