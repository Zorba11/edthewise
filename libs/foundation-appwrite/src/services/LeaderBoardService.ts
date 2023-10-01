import { injectable } from "inversify";
import { database } from "../appwrite-config/config";
import { ExamsDbId, FM_LEADERBOARD_JAN_2024 } from "../db/collections";
import { Models } from "appwrite";

@injectable()
export class LeaderBoardService {
  constructor() {
    console.log("LeaderBoardStore");
  }

  getLeaderBoard = async () => {
    try {
      const leaderboard = (await database.listDocuments(ExamsDbId, FM_LEADERBOARD_JAN_2024)).documents;
      if (leaderboard.length) {
        return leaderboard;
      }
      return [];
    } catch (error) {
      console.error(error);
    }
  };
}
