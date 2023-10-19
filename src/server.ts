import fastify, { FastifyInstance } from 'fastify';
import { todoRoute } from './routes/todo.route';
import { DataSource } from 'typeorm';
import { connectDB } from './config/db';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { config } from 'dotenv';

config();

let server: FastifyInstance;
let dataSource: DataSource | undefined;

const swaggerOptions = {
  swagger: {
    info: {
      title: 'Todo API',
      description: 'Crud of Todo API',
      version: '1.0.0',
    },
    host: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
};

const swaggerUiOptions = {
  routePrefix: 'docs',
  exposeRoute: true,
};
export async function startServer() {
  server = fastify({ logger: true });
  void server.register(fastifySwagger, swaggerOptions);
  void server.register(fastifySwaggerUi, swaggerUiOptions);

  dataSource = await connectDB();
  server.register(todoRoute);
  server.get('/', (request, reply) => reply.send({ msg: 'success' }));

  server.ready((err) => {
    if (err) {
      server.log.error('Failed to register plugins: ', err);
      throw err;
    }
  });

  return { server, dataSource };
}
