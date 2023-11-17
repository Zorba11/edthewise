import express from "express";
import { UserService } from "./user.service";
import { Client } from "appwrite";

export function setupUserController(app: express.Application, client: Client) {
  const userService = new UserService(client);

  app.post("/register", async (req, res) => {
    try {
      console.log("body: ", req.body);
      const { email, password, name } = req.body;

      const response = await userService.register(email, password, name);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  });

  app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const response = await userService.login(email, password);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  });

  app.post("/logout", async (req, res) => {
    try {
      const { sessionId } = req.body;
      console.log("sessionId: ", sessionId);
      const response = await userService.logout(sessionId);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  });
}
