import {
  createFiscalYear as createFiscalYearUtil,
  deleteFiscalYear as deleteFiscalYearUtil
} from "../utils";
import { FiscalYear } from "./types";

export const createFiscalYear = async (fiscalYear: FiscalYear) => {
  await deleteFiscalYearUtil(fiscalYear.id);
  return await createFiscalYearUtil(fiscalYear);
}