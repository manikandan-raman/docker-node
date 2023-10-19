import { FastifyInstance } from 'fastify';
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  getTodo,
  updateTodo,
} from '../controllers/todo.controller';
import {
  createTodoSchema,
  getAllTodoSchema,
  getSingleTodoSchema,
  todoDeleteSchema,
  todoParamSchema,
} from '../schemas/todo.schema';

export const todoRoute = async (fastify: FastifyInstance) => {
  fastify.route({
    url: '/todo',
    method: 'POST',
    schema: {
      tags: ['Todo'],
      description: 'To create a Todo',
      body: createTodoSchema,
      response: {
        201: getSingleTodoSchema,
      },
    },
    handler: createTodo,
  });

  fastify.route({
    url: '/todo',
    method: 'GET',
    schema: {
      tags: ['Todo'],
      response: {
        200: getAllTodoSchema,
      },
    },
    handler: getAllTodo,
  });

  fastify.route({
    url: '/todo/:id',
    method: 'GET',
    schema: {
      tags: ['Todo'],
      params: todoParamSchema,
      response: {
        200: getSingleTodoSchema,
      },
    },
    handler: getTodo,
  });

  fastify.route({
    url: '/todo/:id',
    method: 'PUT',
    schema: {
      tags: ['Todo'],
      params: todoParamSchema,
      body: createTodoSchema,
      response: {
        200: getSingleTodoSchema,
      },
    },
    handler: updateTodo,
  });

  fastify.route({
    url: '/todo/:id',
    method: 'DELETE',
    schema: {
      tags: ['Todo'],
      params: todoParamSchema,
      response: {
        200: todoDeleteSchema,
      },
    },
    handler: deleteTodo,
  });
};
