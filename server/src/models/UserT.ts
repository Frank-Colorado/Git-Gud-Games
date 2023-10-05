import { Field, InputType, ObjectType } from 'type-graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { MaxLength, MinLength } from 'class-validator';
import { Types } from 'mongoose';

@ObjectType()
class GameObject {
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

  @Field(() => String, { nullable: true })
  @prop({ type: String })
  avatar?: string;

  @prop({ type: String, required: true })
  password!: string;

  @Field(() => [GameObject])
  @prop({ type: () => [GameObject], default: [] })
  gameLibrary?: Types.Array<GameObject>;
}

@InputType()
class GameInput {
  @Field(() => String)
  name?: string;

  @Field(() => String)
  id?: string;
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

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => [GameInput], { nullable: true })
  gameLibrary?: GameInput[];
}

export const UserModel = getModelForClass(User);
