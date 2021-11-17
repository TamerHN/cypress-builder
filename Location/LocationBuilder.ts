import FiscalYearBuilder from "../FiscalYear/FiscalYearBuilder";
import { Location } from "./types";
import { defaultLocation } from "./default";
import { createLocation } from "../utils";
import Builder from "../DefaultBuilder/Builder";

export default class LocationBuilder extends Builder {
  fiscalYearBuilder: FiscalYearBuilder;
  private location: Location;

  constructor(testName: string) {
    super();
    this.fiscalYearBuilder = new FiscalYearBuilder(testName);
    this.location = defaultLocation(testName);
  }

  get = () => this.location;

  set = (location: Partial<Location>) => {
    this.location = { ...this.location, ...location };
    return this;
  };

  private createFiscalYear = async () => {
    this.location.fiscalYearId = (await this.fiscalYearBuilder.create()).id;
    return this;
  };

  create = async () => {
    if (!this.settings.createNew) return this.location;

    await this.createFiscalYear();
    const { id } = await createLocation(this.location);
    this.location.id = id;
    return this.location;
  };
}
