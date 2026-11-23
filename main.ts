// The Funniest AI Out-of-Office Reply — make.fun entry
// One line (1-160 chars) written to entry.txt by a small, deterministic
// TypeScript program: no clocks, no randomness, no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The auto-reply itself, built from its two halves so the setup stays
// readable: the delegation gag, then the polite never-reply punchline.
const opening =
  "I'm on leave and have auto-delegated your message to my own out-of-office reply, which is also on leave.";
const closing = " It will get back to you never, politely.";

const autoReply = opening + closing;

// Emit the reply to entry.txt, enforcing the competition's 1-160
// character gate before anything is written, so a bad line fails
// loudly here instead of producing an invalid entry.
function emitEntry(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`entry must be 1-160 chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text + "\n", "utf8");
}

emitEntry(autoReply);
