export const createTodoSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the TODO item.',
    },
    desc: {
      type: 'string',
      description: 'Description of the TODO item.',
    },
    status: {
      type: 'string',
      description: 'Status of the TODO item.',
    },
  },
  required: ['name', 'desc', 'status'],
};

export const getSingleTodoSchema = {
  type: 'object',
  properties: {
    msg: {
      type: 'string',
      description: 'A message indicating the result status.',
    },
    data: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the TODO item.',
        },
        desc: {
          type: 'string',
          description: 'Description of the TODO item.',
        },
        status: {
          type: 'string',
          description: 'Status of the TODO item.',
          enum: ['inprogress', 'completed', 'pending'],
        },
        updated_at: {
          type: 'string',
          format: 'date-time',
          description: 'Last update timestamp of the TODO item.',
        },
        id: {
          type: 'string',
          format: 'uuid',
          description: 'Unique identifier of the TODO item.',
        },
        created_at: {
          type: 'string',
          format: 'date-time',
          description: 'Creation timestamp of the TODO item.',
        },
      },
      required: ['name', 'desc', 'status', 'updated_at', 'id', 'created_at'],
    },
  },
  required: ['msg', 'data'],
};

export const getAllTodoSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          desc: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          created_at: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
          },
        },
        required: ['id', 'name', 'status', 'created_at'],
      },
    },
  },
  required: ['data'],
};

export const todoParamSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      description: 'Unique identifier.',
    },
  },
  required: ['id'],
};

export const todoDeleteSchema = {
  type: 'object',
  properties: {
    msg: {
      type: 'string',
      const: 'success',
    },
  },
  required: ['msg'],
};
