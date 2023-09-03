// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { AdminQuestionEntryForm } from "@edthewise/application-admin-web";
import { container } from "@edthewise/common-inversify";
import { ADMIN_TOKENS } from "@edthewise/common-tokens-web";
import { AdminLoginService } from "@edthewise/foundation-communication-admin";
import { useEffect } from "react";

export function App() {
  const adminLoginService = container.get<AdminLoginService>(ADMIN_TOKENS.AdminLoginServiceToken);

  useEffect(() => {
    adminLoginService.login();
  });

  return (
    <div>
      <AdminQuestionEntryForm title={"FM-MCQ-ACCA"} />
    </div>
  );
}

export default App;
