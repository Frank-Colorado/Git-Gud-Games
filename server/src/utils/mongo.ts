import mongoose from 'mongoose';
import config from 'config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.get('dbUri'));
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
