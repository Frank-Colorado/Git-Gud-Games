import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(
    (process.env.MONGODB_URI as string) ||
      'mongodb://localhost:27017/gitGudGames'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
