import type { Dockerfile } from "~/classes/*.js";

interface CopyCommandOptions {
  chown?: string;
  chmod?: string;
  from?: string;
}

export function COPY(
  this: Dockerfile,
  files: string[],
  options?: CopyCommandOptions
): string;
export function COPY(
  this: Dockerfile,
  src: string,
  dest?: string,
  maybeOptions?: CopyCommandOptions
): string;
export function COPY(
  this: Dockerfile,
  filesOrSrc: string[] | string,
  destOrOptions?: string | CopyCommandOptions,
  maybeOptions?: CopyCommandOptions
): string {
  if (Array.isArray(filesOrSrc)) {
    const files = filesOrSrc;
    if (typeof destOrOptions === "string") {
      throw new Error(
        "COPY command does not support multiple files with a single destination"
      );
    }

    let copyString = "";

    for (const file of files) {
      copyString += this.COPY(file, file, destOrOptions);
    }

    return copyString;
  }

  const options =
    (typeof destOrOptions === "object" ? destOrOptions : maybeOptions) ?? {};
  const dest = typeof destOrOptions === "string" ? destOrOptions : filesOrSrc;

  const flags = [];
  if (options.chown !== undefined) {
    flags.push(`--chown=${options.chown}`);
  }

  if (options.chmod !== undefined) {
    flags.push(`--chmod=${options.chmod}`);
  }

  if (options.from !== undefined) {
    flags.push(`--from=${options.from}`);
  }

  const src = filesOrSrc;
  return this.instruction("COPY", `${flags.join(" ")} ${src} ${dest}`);
}
