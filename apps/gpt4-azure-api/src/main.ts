/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cors from "cors";

import { OpenAI } from "openai";
import { ChatCompletion } from "openai/resources/chat";
import { ImageResponse } from "next/server";

const openai = new OpenAI({
  organization: "org-GhP0IasARrX80CLYmlLsd9JR",
  apiKey: "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",
});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }




// Express server

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.post("/api", async (req, res) => {

  // const { message }  = `What is described in this image ? https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png`;
  const message = `Act as the best image interpretor in the world. Generate an image showing the correct answer option from the give image? https://elixori.com/wp-content/uploads/2023/08/q1.png`;


  // const completion: ChatCompletion = await openai.chat.completions.create({
  //   messages: [{ role: 'user', content: `${message}` }],
  //   model: 'gpt-4-0613',
  // });

  const completion: ImageResponse = await openai.images.generate({
    prompt: `${message}`,
  })

  res.json({
    completion: completion
  })
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
