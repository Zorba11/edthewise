import { injectable } from "inversify";
import localforage from "localforage";
import { initialize } from "next/dist/server/lib/render-server";
import { BaseLocalCacheService } from "../services/BaseLocalCacheService";

@injectable()
export class BaseLocalCacheStore {
  private cache: any = {};

  private cacheService: BaseLocalCacheService;

  constructor() {
    this.cacheService = new BaseLocalCacheService();
  }

  setCache(key: string, value: any) {
    this.cache[key] = value;
  }

  getCache(key: string) {
    return this.cache[key];
  }

  clearCache(key: string) {
    delete this.cache[key];
  }
}
