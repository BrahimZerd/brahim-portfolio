import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URI),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  console.log("MongoDB Connected");
};

export default connectMongo;
