import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { Todo } from '../todo-model';
import { todoField } from '../todo-fields';

export type TodoAddInput = {
  title: string;
  description?: string;
  dueDate?: string;
};

const mutation = mutationWithClientMutationId({
  name: 'TodoAdd',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    dueDate: {
      type: GraphQLString,
    },
  },
  mutateAndGetPayload: async (args: TodoAddInput) => {
    const todo = await new Todo({
      title: args.title,
      description: args.description,
      dueDate: args.dueDate ? new Date(args.dueDate) : null,
    }).save();

    return { todo: todo.id };
  },
  outputFields: {
    ...todoField('todo'),
  },
});

export const TodoAddMutation = {
  ...mutation,
};
