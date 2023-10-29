import {
  LearnExamCard,
  LearnExamResult,
  LearnExamStarter,
  LearnHome,
  LearnList,
} from "@edthewise/application-learning-web";
import { SignUp, SignIn } from "@edthewise/application-users-web";
import { CompeteExamCard, CompeteExamResult, CompeteHome, CompeteList } from "@edthewise/application-compete-web";
import HomePage from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LeaderBoardGeneric, LeaderBoardsList } from "@edthewise/application-leaderboards-web";

export const viewMap = {
  home: <HomePage />,
  notFound: <NotFoundPage />,
  signUp: <SignUp />,
  signIn: <SignIn />,
  learnHome: <LearnHome />,
  learnList: <LearnList />,
  learnExamStarter: <LearnExamStarter />,
  competeHome: <CompeteHome />,
  competeList: <CompeteList />,
  competeExamCard: <CompeteExamCard />,
  learnExamCard: <LearnExamCard />,
  learnExamResult: <LearnExamResult />,
  competeExamResult: <CompeteExamResult />,
  userProfile: <div>userProfile</div>,
  dashboard: <div>dashboard</div>,
  leaderboardsList: <LeaderBoardsList />,
  leaderboard: <LeaderBoardGeneric />,
  chatHome: <div>chatHome</div>,
};
