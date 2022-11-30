import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

await mongoClient.connect().then(() => {
    db = mongoClient.db("dbRecuperacao");
  });

export const dbPolls = db.collection("polls");

export const dbOptions = db.collection("options");

export const dbVotes = db.collection("votes")
