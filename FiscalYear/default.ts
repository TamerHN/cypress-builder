import { FiscalYear } from "./types";

export const defaultFiscalYear = (test: string): FiscalYear => ({
  id: null,
  name: `${test} default Fiscal Year`,
  legalEntityId: `${test} default legal entity`,
  legalEntityName: `${test} default legal entity name`,
});

export default { defaultFiscalYear };
