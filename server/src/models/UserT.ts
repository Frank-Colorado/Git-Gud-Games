import { Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

class Game {
  @prop()
  name: string;

  @prop()
  id: string;
}

export class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ type: String, required: true, unique: true, trim: true })
  username!: string;

  @Field(() => String)
  @prop({ type: String })
  avatar?: string;

  @prop({ type: String, required: true })
  password!: string;

  @Field(() => [Game])
  @prop({ type: () => [Game], default: [] })
  gameLibrary?: Types.Array<Game>;
}
