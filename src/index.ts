import { config } from 'dotenv';
import { startServer } from './server';

config();

async function start() {
  const app = await startServer();
  if (app.dataSource && !app.dataSource.isInitialized) {
    await app.dataSource.initialize();
  }
  const PORT = Number(process.env.SERVER_PORT);

  app.server.listen(
    {
      host: process.env.SERVER_HOST,
      port: PORT,
    },
    () => console.log(`Server up and running on ${PORT}`)
  );
}

start();
