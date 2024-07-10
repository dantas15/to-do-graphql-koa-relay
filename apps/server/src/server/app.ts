import cors from 'kcors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import KoaLogger from 'koa-logger';
import Router from 'koa-router';

import { schema } from '@/schema/schema';

const app = new Koa();

app.use(cors({ origin: '*' }));
app.use(KoaLogger());
app.use(
  bodyParser({
    onerror(err, ctx) {
      ctx.throw(err, 422);
    },
  })
);

const routes = new Router();

routes.all(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
  }))
);

app.use(routes.routes());
app.use(routes.allowedMethods());

export { app };
