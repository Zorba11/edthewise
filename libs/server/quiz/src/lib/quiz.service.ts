import { Databases } from "node-appwrite";
import { Quiz } from "./quiz.model";

export class QuizService {
  private quizzes: Quiz[] = [];
  private db: Databases;
  private dbId = process.env.ED_DB_ID;
  private collectionId: string;

  constructor(db: Databases) {
    this.db = db;
  }

  async createQuiz(quiz: Quiz) {
    try {
      const collectionId = this.getCollectionId(quiz.title);

      if (!collectionId) {
        throw new Error("Collection not found");
      }

      await this.db.createDocument(this.dbId, collectionId, "unique()", quiz);
    } catch (err) {
      // throw new Error(err);
      console.error(err);
    }
  }

  private getCollectionId(quizTitle: string) {
    const collectionName = this.extractPrefix(quizTitle);

    switch (collectionName) {
      case "can-law":
        return process.env?.CAN_LAW_QUIZ_POOL_ID;
      case "can-history":
        return "";
      case "anatomy":
        return "";
    }
  }

  private extractPrefix(str: string): string {
    const parts = str.split("-");
    return [parts[0], parts[1]].join("-");
  }

  getQuizzes() {
    return this.quizzes;
  }

  getQuiz(id: string) {
    return this.quizzes.find((q) => q.id === id);
  }

  submitQuiz(id: string, submittedAnswers: string[]) {
    const quiz = this.getQuiz(id);
    if (!quiz) {
      throw new Error("Quiz not found");
    }

    let score = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      if (quiz.questions[i].answer === submittedAnswers[i]) {
        score++;
      }
    }

    return { score };
  }
}
