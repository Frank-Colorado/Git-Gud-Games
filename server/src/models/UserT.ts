import { Field, InputType, ObjectType } from 'type-graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';
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

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username!: string;

  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @MaxLength(30, {
    message: 'Password must be less than 30 characters',
  })
  @Field(() => String)
  password!: string;

  @Field(() => String)
  avatar?: string;

  @Field(() => [Game])
  gameLibrary?: Game[];
}

export const UserModel = getModelForClass(User);
