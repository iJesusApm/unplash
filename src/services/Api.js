import {createApi} from 'unsplash-js';
import nodeFetch from 'node-fetch';

import {MY_ACCESS_KEY} from './config';

export const unsplash = createApi({
  accessKey: MY_ACCESS_KEY,
  fetch: nodeFetch,
});
