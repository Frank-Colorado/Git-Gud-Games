import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PlaceholderResolver } from './resolvers';

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

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
});
