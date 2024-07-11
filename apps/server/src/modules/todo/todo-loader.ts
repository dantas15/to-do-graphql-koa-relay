import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '@/modules/loader/loaderRegister';

import { Todo } from './todo-model';

const loaderName = 'TodoLoader';

const { Wrapper, getLoader, clearCache, load, loadAll } = createLoader({
  model: Todo,
  loaderName,
});

registerLoader(loaderName, getLoader);

export const TodoLoader = {
  Todo: Wrapper,
  getLoader,
  clearCache,
  load,
  loadAll,
};
