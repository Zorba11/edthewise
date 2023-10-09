import localforage from "localforage";

export class BaseLocalCacheService {
  questionsStore!: LocalForage;
  examsStore!: LocalForage;

  constructor() {
    this.initializeLocalCacheStores();
  }

  private initializeLocalCacheStores() {
    this.questionsStore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "edTheWise-questions",
    });

    this.examsStore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "edTheWise-exam",
    });
  }

  storeQuestion = async (key: string, question: any) => {};
}
