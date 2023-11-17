import { Client } from "appwrite";
import { config } from "dotenv";
import sdk from "node-appwrite";

config();

const client: Client = new Client();

client
  .setEndpoint(process.env.APPWRITE_API_ENDPOINT) // Set your Appwrite endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID); // Set your project ID

const sdkClient = new sdk.Client();
sdkClient
  .setEndpoint(process.env.APPWRITE_API_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const database = new sdk.Databases(sdkClient);

export default client;
export { sdkClient };
export { database };
