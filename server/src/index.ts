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
import cookieParser from 'cookie-parser';
import db from './config/connection';

const main = async () => {
  const PORT: string | number = process.env.PORT || 3001;

  const schema = await buildSchema({
    resolvers,
    // authChecker,
  });

  const server = new ApolloServer({
    schema,
    context: (ctx) => {
      console.log(ctx);
      return ctx;
    },
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  const app: Express = express();

  app.use(cookieParser());
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
