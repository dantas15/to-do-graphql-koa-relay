import { todoConnectionField } from '@/modules/todo/todo-fields';
import { GraphQLObjectType } from 'graphql';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...todoConnectionField('todos'),
  }),
});
