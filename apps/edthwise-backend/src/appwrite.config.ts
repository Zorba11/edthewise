import { Client } from "node-appwrite";
import { config } from "dotenv";

config();

const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_API_ENDPOINT) // Set your Appwrite endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID); // Set your project ID

export default client;
