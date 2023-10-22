import { PanCakesStore } from "@edthewise/application-payments-web";
import {
  CompeteExamCardRouteService,
  CompeteExamResultRouteService,
  CompeteHomeRouteService,
  CompeteListRouteService,
  LeaderBoardRouteService,
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
  CompeteExamsStore,
  QuestionsStore,
  UserStore,
  LeaderBoardStore,
} from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import {
  CompeteListService,
  ExamsService,
  LeaderBoardService,
  QuestionsService,
  UserService,
} from "@edthewise/foundation-appwrite";
import { BaseLocalCacheStore } from "@edthewise/foundation-local-cache";
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
container.bind<LeaderBoardRouteService>(TOKENS.LeaderBoardRouteServiceToken).to(LeaderBoardRouteService);
/**
 * Store Bindings to IOC container
 */
// container.bind<UserStore>(TOKENS.UserStoreToken).toSelf().inSingletonScope();
container.bind<UserStore>(TOKENS.UserStoreToken).to(UserStore).inSingletonScope();
container.bind<QuestionsStore>(TOKENS.QuestionsStoreToken).to(QuestionsStore).inSingletonScope();
container.bind<CompeteListStore>(CompeteListStoreToken).to(CompeteListStore).inSingletonScope();
container.bind<CompeteExamsStore>(TOKENS.ExamStoreToken).to(CompeteExamsStore).inSingletonScope();
container.bind<LeaderBoardStore>(TOKENS.LeaderBoardStoreToken).to(LeaderBoardStore).inSingletonScope();
container.bind<BaseLocalCacheStore>(TOKENS.BaseLocalCacheStoreToken).to(BaseLocalCacheStore).inSingletonScope();
container.bind<PanCakesStore>(TOKENS.PanCakesStoreToken).to(PanCakesStore).inSingletonScope();

/**
 * Service Bindings to IOC container
 */
container.bind<UserService>(TOKENS.UserServiceToken).to(UserService).inSingletonScope();
container.bind<QuestionsService>(TOKENS.QuestionsServiceToken).to(QuestionsService).inSingletonScope();
container.bind<CompeteListService>(TOKENS.CompeteListServiceToken).to(CompeteListService).inSingletonScope();
container.bind<ExamsService>(TOKENS.ExamsServiceToken).to(ExamsService).inSingletonScope();
container.bind<LeaderBoardService>(TOKENS.LeaderBoardServiceToken).to(LeaderBoardService).inSingletonScope();

export { container };
