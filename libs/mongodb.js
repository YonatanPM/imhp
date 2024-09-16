import mongoose from "mongoose";

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("you are now conected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}
