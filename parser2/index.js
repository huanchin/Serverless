import mongoose from "mongoose";
import Url from "./urlModel.js";

let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = mongoose.connection.readyState;
    console.log("DB connection successful!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export const handler = async (event) => {
  await connectToDatabase();
  // const parameter = event.pathParameters.anyParameter;

  const response = {
    statusCode: 200,
    body: JSON.stringify(Object.keys(event.queryStringParameters)),
  };

  return response;
};
