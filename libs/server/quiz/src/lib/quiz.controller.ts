import express from "express";
import { QuizService } from "./quiz.service";
import { Databases } from "node-appwrite";

export function setupQuizController(app: express.Application, db: Databases) {
  const quizService = new QuizService(db);

  app.post("/start-quiz", (req, res) => {
    console.log("body: ", req.body);
    try {
      const quiz = quizService.createQuiz(req.body);
      res.status(201).json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  });
}
