import { FiscalYear } from "./types";
import { defaultFiscalYear } from "./default";
import { createFiscalYear } from "./axios";
import Builder from "../DefaultBuilder/Builder";

export default class FiscalYearBuilder extends Builder {
  private fiscalYear: FiscalYear;

  constructor(testName: string) {
    super();
    this.fiscalYear = defaultFiscalYear(testName);
  }

  get = () => this.fiscalYear;

  set = (fiscalYear: Partial<FiscalYear>) => {
    this.fiscalYear = { ...this.fiscalYear, ...fiscalYear };
    return this;
  };

  create = async () => {
    if (!this.settings.createNew) return this.fiscalYear;

    const { id } = await createFiscalYear(this.fiscalYear);
    this.fiscalYear.id = id;
    return this.fiscalYear;
  };
}
