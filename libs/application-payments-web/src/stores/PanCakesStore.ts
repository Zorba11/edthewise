import { inject, injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class PanCakesStore {
  public getPanCakesCount(): number {
    return 0;
  }
}
