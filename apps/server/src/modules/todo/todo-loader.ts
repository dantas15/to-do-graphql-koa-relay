import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '@/modules/loader/loaderRegister';

import { Todo } from './todo-model';

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: Todo,
  loaderName: 'TodoLoader',
});

registerLoader('TodoLoader', getLoader);

export const TodoLoader = {
  Todo: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
};
