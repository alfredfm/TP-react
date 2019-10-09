import Request from '../../Request';
import { confs } from '../../conf';
const { URL_API } = confs;

let request = new Request();

export const societe = {
  fetchReporting: (params) =>
    request.get('/reporting', params),
  changeConfig: (parameters) =>
    request.post('/parameters', parameters),
  fetchVRP: () =>
    request.get('/vrps'),
}
