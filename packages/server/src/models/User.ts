import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  displayName: string,
  email: string;
  password: string;
}

const userSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>('User', userSchema);
