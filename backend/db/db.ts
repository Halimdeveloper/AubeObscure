import { MongoClient } from "mongodb";
require("dotenv").config();

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
// In production mode, it's best to not use a global variable.
const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
