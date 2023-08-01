/* eslint-disable @typescript-eslint/no-redeclare */

import * as instructions from "~/instructions/*.js";

class DockerfileClass {
  private constructor() {
    Object.assign(this, instructions);
  }

  static create() {
    const self = new DockerfileClass() as Dockerfile;
    return self;
  }

  document = "";

  toString() {
    return this.document;
  }
}

export type Dockerfile = DockerfileClass & typeof instructions;
export const Dockerfile = DockerfileClass;
