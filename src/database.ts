import mongoose from 'mongoose';
import 'dotenv/config';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const dbConfig: string = process.env.MONGO_URL as string;

export const connect = async (): Promise<void> => {
  await mongoose.connect(dbConfig, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const close = (): Promise<void> => mongoose.connection.close();
