import axios from 'axios';
import qs from 'qs';
import { confs } from '../../conf';
import Request from '../../Request';

let request = new Request();

const { URL_API } = confs;

export const auth = {
  register: (user) =>
    axios.post(URL_API+'/users/register', qs.stringify(user))
      .then(res => res.data),
  login: (credentials) =>
    request.post('/users/login', credentials),
  logout: () =>
    request.post('/users/logout'),
  confirm: () =>
   request.get('/users/confirm'),
};
