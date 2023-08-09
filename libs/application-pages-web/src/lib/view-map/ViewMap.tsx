import { LearnHome } from "@edthewise/application-learning-web";
import { DepartmentPage, HomePage, NotFoundPage } from "./pages";
import { SignUp, SignIn } from "@edthewise/application-users-web";
import { CompeteHome, CompeteList } from "@edthewise/application-compete-web";
import { ExamCard } from "@edthewise/application-exams-web";

export const viewMap = {
  department: <DepartmentPage />,
  home: <HomePage />,
  notFound: <NotFoundPage />,
  signUp: <SignUp />,
  signIn: <SignIn />,
  learnHome: <LearnHome />,
  competeHome: <CompeteHome />,
  competeList: <CompeteList />,
  competeExamCard: <ExamCard />,
};
