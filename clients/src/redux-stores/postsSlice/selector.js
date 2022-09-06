import { get } from 'lodash';
import { MODULE_NAME } from '.';

export const getListPost = state =>
  get(state, [MODULE_NAME, 'getListPost', 'data']);
