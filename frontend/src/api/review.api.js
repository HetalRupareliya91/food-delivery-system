// Review API client for the customer app
import { http } from './http';

const BASE = '/api/reviews';

export const list = (params) => http.get(BASE, params);
export const get = (id) => http.get(BASE + '/' + id);
export const create = (data) => http.post(BASE, data);
export const update = (id, data) => http.put(BASE + '/' + id, data);
export const remove = (id) => http.del(BASE + '/' + id);
