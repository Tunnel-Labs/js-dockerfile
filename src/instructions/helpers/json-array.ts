import { Dockerfile } from "~/index.js";

export function toJsonArray(this: Dockerfile, array: any[]) {
  return JSON.stringify(array).replaceAll('","', '", "');
}
