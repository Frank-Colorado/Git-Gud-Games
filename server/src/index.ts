import 'reflect-metadata';
import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PlaceholderResolver } from './resolvers';
import db from './config/connection';

const main = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PlaceholderResolver],
      validate: false,
    }),
  });

  await server.start();
  const app: Express = express();
  server.applyMiddleware({ app });

  const PORT: string | number = process.env.PORT || 3001;

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

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
