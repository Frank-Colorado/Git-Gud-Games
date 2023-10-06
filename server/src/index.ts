import 'reflect-metadata';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { resolvers } from './resolvers';
import db from './config/connection';
import { verifyJwt } from './utils/jwt';
import { User } from './schemas/UserT';
import Context from './types/context';

const main = async () => {
  const PORT: string | number = process.env.PORT || 3001;

  const schema = await buildSchema({
    resolvers,
    // authChecker,
  });

  const server = new ApolloServer({
    schema,
    context: (ctx: Context) => {
      const context = ctx;

      if (ctx.req && ctx.req.headers.authorization) {
        const token =
          ctx.req.headers.authorization.split(' ').pop()?.trim() || '';
        const user = verifyJwt<User>(token);
        context.user = user;
      }

      return context;
    },
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  const app: Express = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });

  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(
        `GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

main().catch((err) => {
  console.error(err);
});
