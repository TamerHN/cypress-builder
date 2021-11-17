import { getDefault } from "./default";
import Settings from "./types";

export default class Builder {
  settings: Settings;

  constructor(builder?: Settings) {
    this.settings = builder ?? getDefault();
  }

  setSettings(settings?: Partial<Settings>) {
    this.settings = { ...this.settings, ...(settings ?? {}) };
    return this;
  }
}
