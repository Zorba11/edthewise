import { CompeteExamsStore, QuestionsStore, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
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
  ) {
    this.questionsUiStore = questionsUiStore;
  }

  onEnterCompeteExamCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

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
      this.examStore.createNewExam(this.userStore?.userId, this.userStore?.name);

      this.questionsUiStore.subject = toState.queryParams.subject;
      await this.questionsUiStore.setFirstQuestionSet();
    } else {
      this.examStore.setNotImplemented(false);
      return routerStore.goTo("notFound");
    }

    return Promise.resolve();
  };

  onExitCompeteExamCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
