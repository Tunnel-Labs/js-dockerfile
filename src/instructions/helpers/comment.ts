import type { Dockerfile } from "~/classes/*.js";

export function comment(this: Dockerfile, commentString: string): string {
  let commentLine: string;
  if (commentString.startsWith("#")) {
    commentLine = commentString;
  } else {
    commentLine = "# " + commentString;
  }

  this.document += commentLine + "\n";

  return commentLine;
}
