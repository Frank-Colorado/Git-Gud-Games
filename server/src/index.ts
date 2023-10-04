import express, { Express } from 'express';
import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [],
      validate: false,
    }),
  });

  const app: Express = express();

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
