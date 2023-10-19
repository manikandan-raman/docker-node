import { Todo } from '../entities/todo.entity';
import { ICreateTodo, ITodo } from '../interfaces/todo.interface';

export const createNewTodo = async (
  data: ICreateTodo
): Promise<ITodo | unknown> => {
  try {
    const { name, desc, status } = data;
    return await Todo.create({
      name,
      desc,
      status,
    }).save();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getAllTodos = async (): Promise<any> => {
  try {
    return await Todo.find();
  } catch (error) {
    console.error(error);
  }
};

export const getTodoById = async (id: string) => {
  try {
    return await Todo.findOne({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateTodoById = async (id: string, data: ICreateTodo) => {
  const { name, desc, status } = data;
  await Todo.update(
    { id },
    {
      name,
      desc,
      status,
    }
  );
  return await getTodoById(id);
};

export const deleteTodoById = async (id: string) => {
  return await Todo.delete({ id });
};
