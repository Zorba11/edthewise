import { CompeteExamCardRouteService } from "@edthewise/application-routing-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { Container } from "inversify";

const container = new Container();

container.bind<CompeteExamCardRouteService>(TOKENS.CompeteExamCardRouteServiceToken).to(CompeteExamCardRouteService);
// container.bind<CompeteExamCardRouteService>(CompeteExamCardRouteService).toSelf();

export { container };
