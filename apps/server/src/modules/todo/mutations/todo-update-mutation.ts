import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { ITodo, Todo } from '../todo-model';
import { todoField } from '../todo-fields';
import { updateFields } from '../utils/updateTodoFields';

export type TodoUpdateInput = {
  id: string;
  title?: string;
  description?: string;
  dueDate?: string;
  doneAt?: string;
};

const TodoUpdateMutation = mutationWithClientMutationId({
  name: 'TodoUpdate',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    doneAt: { type: GraphQLString },
  },
  mutateAndGetPayload: async (args: TodoUpdateInput) => {
    const todo = await Todo.findById(args.id);
    if (!todo) {
      throw new Error('Todo not found');
    }

    updateFields<TodoUpdateInput | ITodo>(todo, args, [
      'title',
      'description',
      'dueDate',
      'doneAt',
    ]);

    await todo.save();

    return {
      todo: todo.id,
    };
  },
  outputFields: {
    ...todoField('todo'),
  },
});

export { TodoUpdateMutation };
