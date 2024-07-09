import { GraphQLSchema } from 'graphql';
import { QueryType } from './query-type';

export const schema = new GraphQLSchema({
  query: QueryType,
});
