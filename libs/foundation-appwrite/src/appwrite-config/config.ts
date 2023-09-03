import { Client, Account, ID, Databases } from "appwrite";

export const client: Client = new Client()
  .setEndpoint(process.env.NX_APPWRITE_ENDPOINT as string) // Your API Endpoint
  .setProject(process.env.NX_APPWRITE_PROJECT_ID as string); // Your project ID

export const account = new Account(client);

export const database = new Databases(client);
