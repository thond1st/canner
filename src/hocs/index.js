import query from './query';
import relation from './relation';
import route from './route';
import cache from './cache';
import request from './request';
import deploy from './deploy';
import id from './id';
import title from './title';
import containerRouter from './containerRouter';
import onDeploy from './onDeploy';
import context from './connectContext';
import errorCatch from './errorCatch';
import validation from './validation';

export default {
  errorCatch,
  query,
  route,
  cache,
  request,
  deploy,
  relation,
  // validator,
  id,
  title,
  containerRouter,
  onDeploy,
  context,
  validation
};