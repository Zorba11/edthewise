import { DepartmentPage, HomePage, NotFoundPage } from './pages';
import { SignUp } from '@edthewise/application-users-web';

export const viewMap = {
  department: <DepartmentPage />,
  home: <HomePage />,
  notFound: <NotFoundPage />,
  signUp: <SignUp />,
};
