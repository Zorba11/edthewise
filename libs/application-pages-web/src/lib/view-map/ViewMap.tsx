import { LearnHome } from "@edthewise/application-learning-web";
import { DepartmentPage, HomePage, NotFoundPage } from "./pages";
import { SignUp, SignIn } from "@edthewise/application-users-web";
import { CompeteHome } from "@edthewise/application-compete-web";

export const viewMap = {
  department: <DepartmentPage />,
  home: <HomePage />,
  notFound: <NotFoundPage />,
  signUp: <SignUp />,
  signIn: <SignIn />,
  learnHome: <LearnHome />,
  competeHome: <CompeteHome />,
};
