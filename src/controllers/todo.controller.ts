import { FastifyReply, FastifyRequest } from 'fastify';
import { Todo } from '../entities/todo.entity';
import {
  createNewTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from '../services/todo.service';
import { ICreateTodo, UpdateTodo, todoId } from '../interfaces/todo.interface';

const createTodo = async (
  request: FastifyRequest<{ Body: ICreateTodo }>,
  reply: FastifyReply
) => {
  const user = await createNewTodo(request.body);
  reply.code(201).send({ msg: 'success', data: user });
};

const getTodo = async (
  request: FastifyRequest<todoId>,
  reply: FastifyReply
) => {
  const todo = await getTodoById(request.params.id);
  reply.send({ msg: 'success', data: todo });
};

const getAllTodo = async (request: FastifyRequest, reply: FastifyReply) => {
  const todos = await getAllTodos();
  reply.send({ msg: 'success', data: todos });
};

const updateTodo = async (
  request: FastifyRequest<UpdateTodo>,
  reply: FastifyReply
) => {
  const todo = await updateTodoById(request.params.id, request.body);
  reply.send({ msg: 'success', data: todo });
};

const deleteTodo = (request: FastifyRequest<todoId>, reply: FastifyReply) => {
  const todo = deleteTodoById(request.params.id);
  reply.send({ msg: 'success' });
};

export { createTodo, getTodo, getAllTodo, updateTodo, deleteTodo };
