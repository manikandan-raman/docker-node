export interface ITodo {
  id?: string;
  name: string;
  desc: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {}

export interface CreateTodo {
  Body: Omit<ITodo, 'id'>;
}

export interface todoId {
  Params: {
    id: string;
  };
}

export interface UpdateTodo extends todoId {
  Body: Omit<ITodo, 'password'>;
}
