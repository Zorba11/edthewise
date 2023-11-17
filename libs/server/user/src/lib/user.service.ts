import { Account, Client } from "appwrite";

export class UserService {
  private client: Client;
  private account: Account;

  constructor(client: Client) {
    this.client = client;
    this.account = new Account(this.client);
  }

  async register(email: string, password: string, name: string) {
    try {
      const response = await this.account.create("unique()", email, password, name);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await this.account.createEmailSession(email, password);
      console.log("response: ", response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async logout(sessionId: string) {
    try {
      const response = await this.account.deleteSession(sessionId);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
