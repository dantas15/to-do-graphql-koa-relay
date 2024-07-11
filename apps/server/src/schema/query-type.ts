import { GraphQLContext } from '@/graphql/context';
import { nodeField, nodesField } from '@/modules/node/typeRegister';
import { TodoLoader } from '@/modules/todo/todo-loader';
import { TodoConnection } from '@/modules/todo/todo-type';
import { GraphQLObjectType } from 'graphql';
import { connectionArgs } from 'graphql-relay';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    // todo: {},
    todos: {
      type: TodoConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context: GraphQLContext) =>
        await TodoLoader.loadAll(),
    },
  }),
});
