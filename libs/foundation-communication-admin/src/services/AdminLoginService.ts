import { account, client } from "@edthewise/foundation-appwrite";
import { injectable } from "inversify";

@injectable()
export class AdminLoginService {
  async login(): Promise<void> {
    try {
      const email = "zorbaspixel@gmail.com";
      const pw = "12345678";
      const adminUser = account.createEmailSession(email, pw);

      if (adminUser) client.setJWT((await adminUser).providerAccessToken);
    } catch (error) {
      console.log("Service - login - error: ", error);
    }
  }
}
