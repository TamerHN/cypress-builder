import LocationBuilder from "../Location/LocationBuilder";
import { PurchaseOrder } from "./types";
import { defaultPurchaseOrder } from "./default";
import { createPO } from "../utils";

export default class PurchaseOrderBuilder {
  locationBuilder: LocationBuilder;
  private purchaseOrder: PurchaseOrder;
  private testName: string;
  private createNew = true;

  constructor(testName: string) {
    this.testName = testName;
    this.locationBuilder = new LocationBuilder(this.testName);
  }

  getPayload = (po: PurchaseOrder = defaultPurchaseOrder(this.testName)) =>
  ({
    ...(this.purchaseOrder ?? {}),
    ...po
  });

  setCreateNew = (isNew) => {
    this.createNew = isNew;
    return this;
  }

  get = () => this.purchaseOrder;

  set = (po: PurchaseOrder) => {
    this.purchaseOrder = { ...po };
    return this;
  };

  createLocation = async () => {
    this.purchaseOrder.location = (await this.locationBuilder.create());
    return this;
  }

  create = async () => {
    if (!this.createNew) return this.purchaseOrder;

    await this.createLocation();
    const { id } = await createPO(this.getPayload(this.purchaseOrder));
    this.purchaseOrder.id = id;
    return this.purchaseOrder;
  };
}