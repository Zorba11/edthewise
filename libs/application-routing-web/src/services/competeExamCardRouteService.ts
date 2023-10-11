import { CompeteExamsStore, QuestionsStore, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { BaseLocalCacheStore } from "@edthewise/foundation-local-cache";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteExamCardRouteService {
  private questionsUiStore: QuestionsStore;

  // verify if this userStore is singleton
  constructor(
    @inject(TOKENS.QuestionsStoreToken) questionsUiStore: QuestionsStore,
    private userStore: UserStore,
    @inject(TOKENS.ExamStoreToken) private examStore: CompeteExamsStore,
    @inject(TOKENS.BaseLocalCacheStoreToken) private baseLocalCacheStore: BaseLocalCacheStore,
  ) {
    this.questionsUiStore = questionsUiStore;
  }

  onEnterCompeteExamCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    // this.preventRoutingOnBackButton();
    return Promise.resolve();
  };

  beforeEnterCompeteCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */
    if (fromState.routeName === toState.routeName) {
      return Promise.reject();
    }

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    if (!this.examStore.notImplemented) {
      if (!this.userStore?.userId) {
        await this.userStore.initialize();
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
      return routerStore.goTo("notFound");
    }

    return Promise.resolve();
  };

  onExitCompeteExamCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    await this.baseLocalCacheStore.clearCache();
    this.baseLocalCacheStore.storeIsExamRunning(true);
    return Promise.resolve();
  };

  private async handleExamCardRoute(toState: any) {
    const subject = toState.queryParams.subject;
    await this.examStore.setExamNameAndId(subject);
    await this.examStore.createNewExam(this.userStore?.userId, this.userStore?.name);
    this.questionsUiStore.subject = subject;
    this.questionsUiStore.initialize();

    await this.questionsUiStore.setFirstQuestionSet();

    this.baseLocalCacheStore.storeIsExamRunning(true);
  }

  private preventRoutingOnBackButton() {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }
}
