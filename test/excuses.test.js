import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { makeExcuse } from "../src/excuses.js";

test("makeExcuse is deterministic for a fixed rng", () => {
  assert.equal(makeExcuse(() => 0), "My cat deleted the production database.");
});

test("build emits dist/index.html and its script", () => {
  execFileSync("npm", ["run", "build"], { stdio: "ignore" });
  assert.ok(existsSync("dist/index.html"));
  assert.ok(existsSync("dist/main.js"));
});
