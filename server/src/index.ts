import express, { Express } from 'express';

const app: Express = express();

const PORT: string | number = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
