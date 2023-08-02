import { Dockerfile } from "~/index.js";

interface AddInstructionOptions {
  checksum?: string;
  keepGitDir?: boolean;
  chown?: string;
  chmod?: string;
  link?: boolean;
}

export function ADD(
  this: Dockerfile,
  src: string | string[],
  dest: string,
  options?: AddInstructionOptions
): string {
  const flags = [];

  if (options?.checksum !== undefined) {
    flags.push(`--checksum=${options.checksum}`);
  }

  if (options?.keepGitDir !== undefined) {
    flags.push(`--keep-git-dir=${options.keepGitDir}`);
  }

  if (options?.chown !== undefined) {
    flags.push(`--chown=${options.chown}`);
  }

  if (options?.chmod !== undefined) {
    flags.push(`--chmod=${options.chmod}`);
  }

  if (options?.link !== undefined) {
    flags.push(`--link=${options.link}`);
  }

  // If any path contains whitespace
  const paths = [...[src].flat(), dest];
  let hasWhitespace = paths.some((path) => /\s/.test(path));

  if (hasWhitespace) {
    return this.instruction(
      "ADD",
      `${flags.join(" ")} ${this.toJsonArray(paths)}`
    );
  } else {
    return this.instruction("ADD", `${flags.join(" ")} ${paths.join(" ")}`);
  }
}
