import { todoMutations } from '@/modules/todo/mutations';
import { GraphQLObjectType } from 'graphql';

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...todoMutations,
  }),
});
