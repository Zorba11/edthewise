import { injectable } from "inversify";
import { account, client } from "../appwrite-config/config";
import "reflect-metadata";

@injectable()
export class UserService {
  async createEmailSession(email: string, password: string) {
    try {
      const session: any = await account.createEmailSession(email, password);
      if (session) client.setJWT(session?.providerAccessToken);
      return session;
    } catch (error) {
      console.log(error);
    }
  }
}
