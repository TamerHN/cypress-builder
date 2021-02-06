import FiscalYearBuilder from "../FiscalYear/FiscalYearBuilder";
import { Location } from "./types";
import { defaultLocation } from "./default";
import { createLocation } from "../utils";

export default class LocationBuilder {
  fiscalYearBuilder: FiscalYearBuilder;
  private location: Location;
  private testName: string;
  private createNew = true;

  constructor(testName: string) {
    this.testName = testName;
    this.fiscalYearBuilder = new FiscalYearBuilder(this.testName);
  }

  getPayload = (location: Location = defaultLocation(this.testName)) =>
  ({
    ...(this.location ?? {}),
    ...location
  });

  setCreateNew = (isNew) => {
    this.createNew = isNew;
    return this;
  }

  get = () => this.location;

  set = (location: Location) => {
    this.location = { ...location };
    return this;
  };

  createFiscalYear = async () => {
    this.location.fiscalYearId = (await this.fiscalYearBuilder.create()).id;
    return this;
  }

  create = async () => {
    if (!this.createNew) return this.location;

    await this.createFiscalYear();
    const { id } = await createLocation(this.getPayload(this.location));
    this.location.id = id;
    return this.location;
  };
}