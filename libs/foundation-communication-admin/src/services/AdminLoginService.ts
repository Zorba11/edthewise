import { account, client } from "@edthewise/foundation-appwrite";
import { injectable } from "inversify";

@injectable()
export class AdminLoginService {
  async login(): Promise<void> {
    let adminUserSession;
    try {
      const email = "zorbaspixel@gmail.com";
      const pw = "12345678";

      adminUserSession = await account.getSession("64f5e9f089f56f766bff");

      if (!adminUserSession) {
        adminUserSession = await account.createEmailSession(email, pw);
      }

      if (adminUserSession) client.setJWT(adminUserSession.providerAccessToken);
    } catch (error) {
      console.log("Service - login - error: ", error);
    }
  }
}
