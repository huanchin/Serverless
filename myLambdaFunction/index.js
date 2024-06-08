import { MongoClient } from "mongodb";

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  cachedDb = db;
  return db;
}

export const handler = async (event, context) => {
  const uri = process.env.MONGODB_URI;
  const db = await connectToDatabase(uri);

  const collection = db.collection("test");

  // 這裡可以根據需要更改為插入、查詢或其他操作
  // const result = await collection.insertOne({ test: "Hello from Lambda" });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
