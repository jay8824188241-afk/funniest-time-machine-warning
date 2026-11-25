// Funniest Time Machine Warning Label — make.fun bounty
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// Writes a single original warning label for a time machine to
// /output/entry.txt (UTF-8, 1-120 characters, no trailing newline).
// Node 22, standard library only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised label: tightened from "Any damage will be billed" to
// "Damage is billed" — nine fewer characters, same deadpan billing
// frame, and the paradox punchline ("who no longer exists") still
// lands in the last few words.
const label =
  "WARNING: Do not alter the past. Damage is billed to your grandfather, who no longer exists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
