/**
 * Set the "next" tag to the newest version.
 */

import { execSync } from "node:child_process";
import { clean, gt } from "semver";
import pkgJson from "../package.json" with { type: "json" };

const pkgName = pkgJson.name;
const cmd = `pnpm view ${pkgName}@next version`;
const output = execSync(cmd, { encoding: "utf8" });

const nextVersion = clean(output);
const currentVersion = clean(pkgJson.version);

if (!nextVersion) {
	const msg = `'next' version '${nextVersion}' is invalid.`;
	throw new Error(msg);
}

if (!currentVersion) {
	const msg = `Current version '${currentVersion}' is invalid.`;
	throw new Error(msg);
}

const isCurrentVersionMostRecent = gt(currentVersion, nextVersion);

if (isCurrentVersionMostRecent) {
	const cmd = `pnpm dist-tag add ${pkgName}@${currentVersion} next`;
	execSync(cmd, { encoding: "utf8" });
}
