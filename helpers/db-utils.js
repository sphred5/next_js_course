import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DB_URL)
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db('events');
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, dbName, collection, sort, filter = {}) {
  const db = client.db(dbName);
  return await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
}
