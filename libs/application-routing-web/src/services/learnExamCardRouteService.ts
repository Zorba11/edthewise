import { CompeteExamsStore, QuestionsStore, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { BaseLocalCacheStore } from "@edthewise/foundation-local-cache";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LearnExamCardRouteService {
  private questionsStore: QuestionsStore;

  // verify if this userStore is singleton
  constructor(
    @inject(TOKENS.QuestionsStoreToken) questionsUiStore: QuestionsStore,
    @inject(TOKENS.UserStoreToken) private userStore: UserStore,
    @inject(TOKENS.ExamStoreToken) private examStore: CompeteExamsStore,
    @inject(TOKENS.BaseLocalCacheStoreToken) private baseLocalCacheStore: BaseLocalCacheStore,
  ) {
    this.questionsStore = questionsUiStore;
  }

  onEnterLearnExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  onExitLearnExamCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    await this.baseLocalCacheStore.clearCache();
    this.baseLocalCacheStore.storeIsExamRunning(true);
    localStorage.removeItem("prevTimeLeft");
    return Promise.resolve();
  };

  beforeEnterLearnCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    if (!this.examStore.notImplemented) {
      if (!this.userStore?.userId) {
        await this.userStore.getUserId();
      }

      /**
       * TODO: THIS IS A TEMPORARY FIX, complete the whole exam generation
       * and running/submission logic.
       * Also, create an email session manually and hard code it for
       * development purposes.
       * */
      await this.handleExamCardRoute(toState);
    } else {
      this.examStore.setNotImplemented(false);
      return Promise.resolve(routerStore.goTo("notFound"));
    }

    return Promise.resolve();
  };

  private async handleExamCardRoute(toState: any) {
    // TODO: make this dynamic
    const subject = toState.queryParams.subject ? toState.queryParams.subject : "Financial Management (FM)";
    await this.examStore.setExamNameAndId(subject);
    await this.examStore.createNewExam(this.userStore?.userId, this.userStore?.name);
    this.questionsStore.subject = subject;
    this.questionsStore.initialize();

    (await this.examStore.isExamRunning())
      ? await this.questionsStore.setQuestionSetAndCurrentQ(true)
      : await this.questionsStore.setQuestionSetAndCurrentQ();

    this.baseLocalCacheStore.storeIsExamRunning(true);
  }
}
