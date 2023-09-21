import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb+srv://jaikandpal:jaikandpal@cluster0.94xmrvd.mongodb.net/");
  console.log(`Mongodb is connected with ${connection.host}`);
};