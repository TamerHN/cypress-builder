import { FiscalYear } from "./types";
import { defaultFiscalYear } from "./default";
import { createFiscalYear } from "./axios";

export default class FiscalYearBuilder {
  private fiscalYear: FiscalYear;
  private testName: string;
  private createNew = true;

  constructor(testName: string) {
    this.testName = testName;
  }

  getPayload = (fiscalYear: FiscalYear = defaultFiscalYear(this.testName)) =>
  ({
    ...(this.fiscalYear ?? {}),
    ...fiscalYear
  });

  setCreateNew = (isNew) => {
    this.createNew = isNew;
    return this;
  }

  get = () => this.fiscalYear;

  set = (fiscalYear: FiscalYear) => {
    this.fiscalYear = { ...fiscalYear };
    return this;
  };

  create = async () => {
    if (!this.createNew) return this.fiscalYear;

    const { id } = await createFiscalYear(this.getPayload(this.fiscalYear));
    this.fiscalYear.id = id;
    return this.fiscalYear;
  };
}