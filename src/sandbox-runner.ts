import { CloudflareSandboxRunner } from "@emdash-cms/cloudflare/sandbox";
import type { SandboxOptions } from "emdash";

export function createSandboxRunner(options: SandboxOptions) {
	return new CloudflareSandboxRunner({
		...options,
		limits: {
			...options.limits,
			subrequests: 50,
		},
	});
}