/* eslint-disable @typescript-eslint/no-redeclare */

import * as instructions from "~/instructions/*.js";

class DockerfileClass {
  private constructor() {}

  static create() {
    const self = new DockerfileClass() as Dockerfile;
    Object.assign(self, instructions);
    return self;
  }

  private document = "";

  toString() {
    return this.document;
  }
}

export type Dockerfile = DockerfileClass & typeof instructions;
export const Dockerfile = DockerfileClass;
