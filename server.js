import fs from 'fs';
import Koa from 'koa';
import Router from '@koa/router';
import staticFiles from 'koa-static';
  
const PORT = 3000  

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = fs.readFileSync("./dist/index.html");
});

app.use(router.routes());
app.use(staticFiles('./dist'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});