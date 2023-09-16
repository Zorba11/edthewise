import { TOKENS } from "@edthewise/common-tokens-web";
import { UserService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import { action, computed, makeAutoObservable, observable } from "mobx";
import "reflect-metadata";

@injectable()
export class UserStore {
  @observable name!: string;
  @observable email!: string;
  @observable isLoggedIn!: boolean;
  @observable userId!: string;
  @observable
  private session!: any | null;

  constructor(@inject(TOKENS.UserServiceToken) private userService: UserService) {
    makeAutoObservable(this);

    this.initialize();
  }

  createEmailSession = async (email: string, password: string) => {
    const session = await this.userService.createEmailSession(email, password);
    await sessionStorage.setItem("session", JSON.stringify(session));

    if (session) {
      this.setLoggedIn(true);
      this.setEmail(email);
      this.setUserId(session?.userId);
      this.setSession(session);
    }

    return session;
  };

  @action
  setName = (name: string) => {
    this.name = name;
  };

  @action
  setUserId = (userId: string) => {
    this.userId = userId;
  };

  @action
  setSession = (session: any | null) => {
    this.session = session;
  };

  @computed
  getSession = () => {
    return this.session;
  };

  @action
  setLoggedIn = (isLogged: boolean) => {
    this.isLoggedIn = isLogged;
  };

  @action
  logout = () => {
    this.reset();
  };

  @action
  setEmail = (email: string) => {
    this.email = email;
  };

  private async initialize() {
    const session = await sessionStorage.getItem("session");
    if (!session || session === "undefined") {
      this.reset();
      return;
    }

    const sessionObject = JSON.parse(session);
    if (!this.isSessionValid(sessionObject)) {
      this.reset();
    }

    const { email, userId } = sessionObject;
    this.setLoggedIn(true);
    this.setEmail(email);
    this.setUserId(userId);
    this.setSession(sessionObject);
  }

  @action
  private async reset() {
    this.setLoggedIn(false);
    this.setSession(null);
    this.setEmail("");
    this.setUserId("");
    await sessionStorage.removeItem("session");
  }

  private isSessionValid(sessionObject: any) {
    return sessionObject?.providerAccessTokenExpiry && sessionObject?.providerAccessTokenExpiry > Date.now();
  }
}
