import { type DockerCommands } from "~/commands/$class.js";

export function LABEL(
  this: DockerCommands,
  label: string,
  value: string
): string;
export function LABEL(this: DockerCommands, labels: [string, string][]): string;
export function LABEL(
  this: DockerCommands,
  labelOrLabels: string | [string, string][],
  value?: string
): string {
  if (Array.isArray(labelOrLabels)) {
    const labels = labelOrLabels;
    if (labels.length === 0) return "";

    let labelsCommand = "LABEL";
    for (const [label, value] of labels) {
      labelsCommand += ` ${label}=${value}`;
    }

    return this.command(labelsCommand);
  } else {
    const label = labelOrLabels;
    return this.command(`LABEL ${label}=${value}`);
  }
}
