import { Location } from "../Location/types";

export interface PurchaseOrder {
  id?: string;
  name: string;
  location: Location;
}