import { TodoType, TodoConnection } from './todo-type';
import { TodoLoader } from './todo-loader';
import { connectionArgs } from 'graphql-relay';

export const todoField = (key: string) => ({
  [key]: {
    type: TodoType,
    resolve: async (obj: Record<string, unknown>, _: any, context: any) =>
      await TodoLoader.load(context, obj[key] as string),
  },
});

export const todoConnectionField = (key: string) => ({
  [key]: {
    type: TodoConnection.connectionType,
    args: {
      ...connectionArgs,
    },
    resolve: async (_: any, args: any, context: any) =>
      await TodoLoader.loadAll(context, args),
  },
});
