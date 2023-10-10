import { TOKENS } from "@edthewise/common-tokens-web";
import { UserService, signUp } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import { action, computed, makeAutoObservable, observable } from "mobx";
import "reflect-metadata";

const ED_SESSION_NAME = "ed-session";

@injectable()
export class UserStore {
  @observable name!: string;
  @observable email!: string;
  @observable isLoggedIn!: boolean;
  @observable userId!: string;
  @observable
  private session!: any | null;

  private userDocId!: string;
  private countryName!: string;

  constructor(@inject(TOKENS.UserServiceToken) private userService: UserService) {
    makeAutoObservable(this);

    this.initialize();
  }

  createEmailSession = async (email: string, password: string, useSession?: boolean) => {
    const session = await this.userService.createEmailSession(email, password, useSession);

    if (session) {
      this.setLoggedIn(true);
      this.setUserId(session?.userId);
      this.setSession(session);

      // fetch user details
      const user = await this.userService.getUserDetails(this.userId);

      if (user) {
        this.setName(user?.username);
        this.setEmail(user?.email);
        this.userDocId = user.$id;
      }
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

  async initialize() {
    try {
      const session = await localStorage.getItem(ED_SESSION_NAME);
      if (!session || session === "undefined") {
        this.reset();
        return;
      }

      const sessionObject = JSON.parse(session);
      if (!this.isSessionValid(sessionObject)) {
        this.reset();
      }

      this.countryName = sessionObject.countryName;
      const { email, userId } = sessionObject;
      this.setLoggedIn(true);
      this.setEmail(email);
      this.setUserId(userId);
      this.setSession(sessionObject);

      const user = await this.userService.getUserDetails(this.userId);
      this.name = user?.username;
    } catch (error) {
      console.log(error);
    }
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
