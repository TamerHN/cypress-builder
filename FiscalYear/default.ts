import { FiscalYear } from "./types";

export const defaultFiscalYear = (test: string) => ({
  id: null,
  name: `${test} default Fiscal Year`,
} as FiscalYear);


export default { defaultFiscalYear }