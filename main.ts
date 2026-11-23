// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply line (1-160 chars) to entry.txt.
// Deterministic: no randomness, no time, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm on leave and have auto-delegated your message to my own out-of-office reply, which is also on leave. It will get back to you never, politely.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY + "\n", "utf8");
