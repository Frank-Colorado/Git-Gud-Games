import { Field, ObjectType } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

@ObjectType()
class Game {
  @Field(() => String)
  @prop()
  name?: string;

  @Field(() => String)
  @prop()
  id?: string;
}

@ObjectType()
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
