import { FiscalYear } from "../FiscalYear/types";

export interface Location {
  id?: string;
  name: string;
  fiscalYearId?: FiscalYear["id"];
}