import { AdminQStore } from "@edthewise/application-admin-stores-web";
import {
  CompeteExamCardRouteService,
  CompeteExamResultRouteService,
  CompeteHomeRouteService,
  CompeteListRouteService,
  LearnExamCardRouteService,
  LearnExamResultRouteService,
  LearnExamStarterRouteService,
  LearnHomeRouteService,
  LearnListRouteService,
} from "@edthewise/application-routing-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { ADMIN_TOKENS, TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { AdminQService } from "@edthewise/foundation-communication-admin";
import { Container } from "inversify";

const container = new Container();

/**
 * bind routeservices to the IOC container
 */
container.bind<CompeteExamCardRouteService>(TOKENS.CompeteExamCardRouteServiceToken).to(CompeteExamCardRouteService);
container
  .bind<CompeteExamResultRouteService>(TOKENS.CompeteExamResultRouteServiceToken)
  .to(CompeteExamResultRouteService);
container.bind<CompeteHomeRouteService>(TOKENS.CompeteHomeRouteServiceToken).to(CompeteHomeRouteService);
container.bind<CompeteListRouteService>(TOKENS.CompeteListRouteServiceToken).to(CompeteListRouteService);
container.bind<LearnExamCardRouteService>(TOKENS.LearnExamCardRouteServiceToken).to(LearnExamCardRouteService);
container.bind<LearnExamResultRouteService>(TOKENS.LearnExamResultRouteServiceToken).to(LearnExamResultRouteService);
container.bind<LearnExamStarterRouteService>(TOKENS.LearnExamStarterRouteServiceToken).to(LearnExamStarterRouteService);
container.bind<LearnHomeRouteService>(TOKENS.LearnHomeRouteServiceToken).to(LearnHomeRouteService);
container.bind<LearnListRouteService>(TOKENS.LearnListRouteServiceToken).to(LearnListRouteService);

/**
 * Store Bindings to IOC container
 */
container.bind<QuestionsStore>(TOKENS.QuestionsStoreToken).to(QuestionsStore).inSingletonScope();

/**
 * Service Bindings to IOC container
 */
container.bind<QuestionsService>(TOKENS.QuestionsServiceToken).to(QuestionsService).inSingletonScope();

if ((process.env.NX_APP_NAME as string) === "edthewise-ADMIN") {
  /**
   * Store bindings
   */
  container.bind<AdminQStore>(ADMIN_TOKENS.AdminQStoreToken).to(AdminQStore).inSingletonScope();

  /**
   * Service bindings
   * */
  container.bind<AdminQService>(ADMIN_TOKENS.AdminQServiceToken).to(AdminQService).inSingletonScope();
}

export { container };
