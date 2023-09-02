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
import { TOKENS } from "@edthewise/common-tokens-web";
import { Container } from "inversify";

const container = new Container();

// bind routeservices to the IOC container
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

export { container };
