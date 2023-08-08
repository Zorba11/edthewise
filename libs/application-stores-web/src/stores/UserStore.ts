import { action, makeAutoObservable } from "mobx";

class UserStore {

  name: string;
  email: string;
  isLoggedIn: boolean;

  constructor() {
    makeAutoObservable(this);
    this.name = '';
    this.email = '';
    this.isLoggedIn = false;
  }

  @action
  setLoggedIn = (isLogged: boolean) => {
    this.isLoggedIn = isLogged;
  }

  @action
  setEmail = (email: string) => {
    this.email = email;
  }
}

export const userStore = new UserStore();
