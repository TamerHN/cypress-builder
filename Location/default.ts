import { Location } from "./types";

export const defaultLocation = (test: string) => ({
  id: null,
  name: `${test} default Location`,
  fiscalYearId: "2021",
} as Location);


export default { defaultLocation }