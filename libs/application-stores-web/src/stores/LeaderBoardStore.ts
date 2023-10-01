import { TOKENS } from "@edthewise/common-tokens-web";
import { LeaderBoardService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";

@injectable()
export class LeaderBoardStore {
  leaderBoard!: any[];

  constructor(@inject(TOKENS.LeaderBoardServiceToken) private leaderBoardService: LeaderBoardService) {}

  fetchLeaderBoard = async () => {
    const leaderboard = await this.leaderBoardService.getLeaderBoard();
    if (leaderboard?.length) {
      this.leaderBoard = leaderboard;
      this.sortLeaderBoard();
    }
  };

  private sortLeaderBoard = () => {
    // TODO: this should be moved to the backend - leaderboard service

    const uniqueLeaderBoard = this.leaderBoard.reduce((acc, curr) => {
      const existingUser = acc.find((user: any) => user.userId === curr.userId);
      if (!existingUser) {
        acc.push(curr);
      } else if (curr.marks > existingUser.marks) {
        existingUser.marks = curr.marks;
        existingUser.duration = curr.duration;
      }
      return acc;
    }, []);

    this.leaderBoard = uniqueLeaderBoard.sort((a: any, b: any) => b.marks - a.marks);
  };
}
