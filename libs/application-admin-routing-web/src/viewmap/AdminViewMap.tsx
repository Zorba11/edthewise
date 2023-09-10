import { AdminMCQPreview, AdminMCQEntryForm, AdminSQEntryForm, AdminSQPreview } from "@edthewise/application-admin-web";
import { NotFoundPage } from "../pages/NotFound";

export const adminViewMap = {
  home: <AdminMCQEntryForm title="FM-MCQ-ACCA" />,
  notFound: <NotFoundPage />,
  mCQPreview: <AdminMCQPreview title="FM-MCQ-ACCA" />,
  sqEntryForm: <AdminSQEntryForm title="FM-SQ-ACCA" />,
  sqPreview: <AdminSQPreview title="FM-SQ-ACCA" />,
  sqMCQEntryForm: <AdminMCQEntryForm title="FM-MCQ-ACCA" />,
};
