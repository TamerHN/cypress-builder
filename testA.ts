import PurchaseOrderBuilder from "./PurchaseOrder/PurchaseOrderBuilder";

async function testA() {
  //before test
  const testName = "BO-3322";
  const purchaseOrderBuilder1 = new PurchaseOrderBuilder(testName);
  purchaseOrderBuilder1.locationBuilder
    .set({ name: "Location Specific Name" })
    .fiscalYearBuilder.set({ name: "FiscalYear Name Specific" });

  await purchaseOrderBuilder1.create();

  const purchaseOrderBuilder2 = new PurchaseOrderBuilder(`${testName} - 2`);

  const location = purchaseOrderBuilder1.locationBuilder.get();
  const fiscalYear = purchaseOrderBuilder1.locationBuilder.fiscalYearBuilder.get();

  purchaseOrderBuilder2.locationBuilder
    .set(location)
    .setSettings({ createNew: true }) //default
    .fiscalYearBuilder.set(fiscalYear);

  await purchaseOrderBuilder2.create();

  purchaseOrderBuilder1.get().id;
}
