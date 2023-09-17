import { injectable } from "inversify";
import { account, client, database } from "../appwrite-config/config";
import "reflect-metadata";
import { ExamsDbId, USERS_COLLECTION_ID } from "../db/collections";
import { ID } from "appwrite";

@injectable()
export class UserService {
  async createEmailSession(email: string, password: string, useSession = true) {
    try {
      let session: any;
      if (useSession) {
        session = await sessionStorage.getItem("session");
        if (session && session !== "undefined") {
          const sessionObj = JSON.parse(session);
          client.setJWT(sessionObj?.providerAccessToken);
          return session;
        }
      }

      session = await this.createAppwriteSession(session, email, password);
      if (session) client.setJWT(session?.providerAccessToken);
      return session;
    } catch (error) {
      console.log(error);
    }
  }

  private async createAppwriteSession(session: any, email: string, password: string) {
    session = await account.createEmailSession(email, password);
    await sessionStorage.setItem("session", JSON.stringify(session));
    return session;
  }

  async createUserDocument(userId: string, name: string, email: string) {
    try {
      const response = await database.createDocument(ExamsDbId, USERS_COLLECTION_ID, ID.unique(), {
        id: userId,
        username: name,
        email: email,
        scores: "[]",
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
