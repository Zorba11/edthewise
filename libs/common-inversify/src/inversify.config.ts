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
  MainHomeRouteService,
  SignInRouteService,
} from "@edthewise/application-routing-web";
import {
  CompeteListStore,
  CompeteListStoreToken,
  ExamsStore,
  QuestionsStore,
  UserStore,
} from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { CompeteListService, ExamsService, QuestionsService, UserService } from "@edthewise/foundation-appwrite";
import { Container } from "inversify";

const container = new Container();

/**
 * bind routeservices to the IOC container
 */
container.bind<SignInRouteService>(TOKENS.SignInRouteServiceToken).to(SignInRouteService);
container.bind<MainHomeRouteService>(TOKENS.MainHomeRouteServiceToken).to(MainHomeRouteService);
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
// container.bind<UserStore>(TOKENS.UserStoreToken).toSelf().inSingletonScope();
container.bind<UserStore>(UserStore).toSelf().inSingletonScope();
container.bind<QuestionsStore>(TOKENS.QuestionsStoreToken).to(QuestionsStore).inSingletonScope();
container.bind<CompeteListStore>(CompeteListStoreToken).to(CompeteListStore).inSingletonScope();
container.bind<ExamsStore>(TOKENS.ExamStoreToken).to(ExamsStore).inSingletonScope();

/**
 * Service Bindings to IOC container
 */
container.bind<UserService>(TOKENS.UserServiceToken).to(UserService).inSingletonScope();
container.bind<QuestionsService>(TOKENS.QuestionsServiceToken).to(QuestionsService).inSingletonScope();
container.bind<CompeteListService>(TOKENS.CompeteListServiceToken).to(CompeteListService).inSingletonScope();
container.bind<ExamsService>(TOKENS.ExamsServiceToken).to(ExamsService).inSingletonScope();

export { container };
