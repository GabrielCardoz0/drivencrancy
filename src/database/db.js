import { MongoClient } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017");
let db;

await mongoClient.connect().then(() => {
    db = mongoClient.db("dbRecuperacao");
  });

export const dbPolls = db.collection("polls");

export const dbOptions = db.collection("options");
