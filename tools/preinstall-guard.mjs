// Cross-platform guard: memastikan instalasi hanya lewat pnpm,
// dan membersihkan lockfile nyasar dari package manager lain.
import { rmSync } from "node:fs";

rmSync("package-lock.json", { force: true });
rmSync("yarn.lock", { force: true });

const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}