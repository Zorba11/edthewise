import { TOKENS } from "@edthewise/common-tokens-web";
import { UserService, signUp } from "@edthewise/foundation-appwrite";
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

  createEmailSession = async (email: string, password: string, useSession?: boolean) => {
    const session = await this.userService.createEmailSession(email, password, useSession);

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

  createUserDocument = async (userId: string, fullName: string, email: string) => {
    const userDocument = await this.userService.createUserDocument(userId, fullName, email);
    return userDocument;
  };

  signUp = async (email: string, password: string, fullName: string) => {
    const user = await signUp(email, password, fullName);
    if (user) {
      await this.createUserDocument(user.$id, user.name, user.email);

      /**
       * TODO: Uncomment this when goinf live
       */
      // this.createEmailSession(email, password, false);
    }
    return user;
  };
}
