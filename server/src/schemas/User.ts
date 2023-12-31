import { Field, InputType, Int, ObjectType } from 'type-graphql';
import {
  getModelForClass,
  prop,
  pre,
  ReturnModelType,
  queryMethod,
  index,
  DocumentType,
} from '@typegoose/typegoose';
import {
  MaxLength,
  MinLength,
  IsInt,
  IsString,
  IsOptional,
} from 'class-validator';
import bcrypt from 'bcrypt';
import { AsQueryMethod, Ref } from '@typegoose/typegoose/lib/types';

function findByUsername(
  this: ReturnModelType<typeof User, QueryHelpers>,
  username: User['username']
) {
  return this.findOne({ username });
}

interface QueryHelpers {
  findByUsername: AsQueryMethod<typeof findByUsername>;
}

@ObjectType()
class GameObject {
  @Field(() => Int)
  @prop()
  id?: number;

  @Field(() => String)
  @prop()
  name?: string;

  @Field(() => String)
  @prop()
  image?: string;
}

@pre<User>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
})
@index({ username: 1 })
@queryMethod(findByUsername)
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

  @Field(() => String)
  @prop({ type: String, default: "This user doesn't have a bio yet!" })
  bio?: string;

  @prop({ type: String, required: true })
  password!: string;

  @Field(() => [GameObject])
  @prop({ type: () => [GameObject], default: [] })
  gameLibrary?: Ref<GameObject>[];

  public async isCorrectPassword(this: DocumentType<User>, password: string) {
    return bcrypt.compare(password, this.password);
  }
}

export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

@ObjectType()
export class Auth {
  @Field(() => String)
  token!: string;

  @Field(() => User)
  user!: User;
}

@InputType()
export class UserInput {
  @MinLength(3, {
    message: 'Username must be at least 3 characters long',
  })
  @MaxLength(15, {
    message: 'Username must be less than 15 characters',
  })
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
}

@InputType()
export class UpdateUserInput {
  @MinLength(3, {
    message: 'Username must be at least 3 characters long',
  })
  @MaxLength(15, {
    message: 'Username must be less than 15 characters',
  })
  @Field(() => String)
  username?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  avatar?: string;

  @MinLength(25, {
    message: 'Bio must be at least 25 characters long',
  })
  @MaxLength(500, {
    message: 'Bio must be less than 500 characters',
  })
  @Field(() => String)
  bio?: string;
}

@InputType()
export class EditGameInput {
  @IsInt()
  @Field(() => Int)
  id!: number;

  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsString()
  @Field(() => String, { nullable: true })
  image?: string;
}
