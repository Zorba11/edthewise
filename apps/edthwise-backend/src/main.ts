import { setupUserController } from "@edthewise/server/user";
import express from "express";
import client, { database } from "./appwrite.config";
import { setupQuizController } from "@edthewise/server/quiz";

const app = express();
// Add these two lines before your routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupUserController(app, client);
setupQuizController(app, database);

const port = 3000; // You can choose a port that suits your setup

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
