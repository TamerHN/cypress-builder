import { PurchaseOrder } from "./types";
import { defaultLocation } from "../Location/default"

export const defaultPurchaseOrder = (test: string) => ({
  id: null,
  name: `${test} default purchase order`,
  location: defaultLocation(test),
} as PurchaseOrder);


export default { defaultPurchaseOrder }