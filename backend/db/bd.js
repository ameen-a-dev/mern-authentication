import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const intance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("Db Connection failed ", error);
  }
};
