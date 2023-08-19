import {
  LearnExamCard,
  LearnExamResult,
  LearnExamStarter,
  LearnHome,
  LearnList,
} from "@edthewise/application-learning-web";
import { DepartmentPage, HomePage, NotFoundPage } from "./pages";
import { SignUp, SignIn } from "@edthewise/application-users-web";
import { CompeteExamCard, CompeteExamResult, CompeteHome, CompeteList } from "@edthewise/application-compete-web";

export const viewMap = {
  department: <DepartmentPage />,
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
};
