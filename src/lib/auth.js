import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is missing");
}

const client = new MongoClient(process.env.MONGO_URI);

await client.connect(); // ✅ MUST
const db = client.db(); // default DB (URI থেকে নিবে)

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID , 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
});