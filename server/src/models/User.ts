import mongoose, { Schema, Model, Types, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface Game {
  name: string;
  id: string;
}

interface IUser extends mongoose.Document {
  username: string;
  password: string;
  avatar?: string;
  gameLibrary?: Types.Array<Game>;
}

interface IUserMethods {
  isCorrectPassword: (password: string) => Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minlength: [5, 'Password must be at least 5 characters long.'],
  },
  avatar: {
    type: String,
    default: 'https://i.imgur.com/1F3BKZw.png',
  },
  gameLibrary: {
    type: [
      {
        name: String,
        id: String,
      },
    ],
    default: [],
  },
});

UserSchema.pre<IUser>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser, UserModel>('User', UserSchema);

export default User;
