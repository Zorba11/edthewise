import { AdminQPreview, AdminQuestionEntryForm } from "@edthewise/application-admin-web";
import { NotFoundPage } from "../pages/NotFound";

export const adminViewMap = {
  home: <AdminQuestionEntryForm title="FM-MCQ-ACCA" />,
  notFound: <NotFoundPage />,
  questionPreview: <AdminQPreview title="FM-MCQ-ACCA" />,
};
