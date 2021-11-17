import LocationBuilder from "../Location/LocationBuilder";
import { PurchaseOrder } from "./types";
import { defaultPurchaseOrder } from "./default";
import { createPO } from "../utils";
import Builder from "../DefaultBuilder/Builder";

export default class PurchaseOrderBuilder extends Builder {
  locationBuilder: LocationBuilder;
  private purchaseOrder: PurchaseOrder;

  constructor(testName: string) {
    super();
    this.locationBuilder = new LocationBuilder(testName);
    this.purchaseOrder = defaultPurchaseOrder(testName);
  }

  get = () => this.purchaseOrder;

  set = (po: PurchaseOrder) => {
    this.purchaseOrder = { ...po };
    return this;
  };

  private createLocation = async () => {
    this.purchaseOrder.location = await this.locationBuilder.create();
    return this;
  };

  create = async () => {
    if (!this.settings.createNew) return this.purchaseOrder;

    await this.createLocation();
    const { id } = await createPO(this.purchaseOrder);
    this.purchaseOrder.id = id;
    return this.purchaseOrder;
  };
}
