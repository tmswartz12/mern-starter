import path from 'path';
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
const PORT = process.env.PORT || 8080;
const app = express();
// import db from './db/db.js';
import useragent from 'express-useragent';
import bodyParser from 'body-parser';
import api from './api/index.js';

// import sslRedirect from 'heroku-ssl-redirect';

export default app;

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));
  // app.use(sslRedirect());

  // body parsing middleware
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // compression middleware
  app.use(compression());
  app.use(useragent.express());
  app.use('/api', api);

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.static(path.join(__dirname, '..', 'dist')));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, _res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      // @ts-ignore
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html
  app.use('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use(
    (
      err: { stack: any; status: any; message: any },
      _req: any,
      res: any,
      _next: any
    ) => {
      console.error(err);
      console.error(err.stack);
      res
        .status(err.status || 500)
        .send(err.message || 'Internal server error.');
    }
  );
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};

async function bootApp() {
  await createApp();
  await startListening();
}
bootApp();
