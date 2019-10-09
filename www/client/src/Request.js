import axios from 'axios';
import qs from 'qs';
import { confs } from './conf';
import { loadState } from './localStorage';
// Retrieve api Domaine address
const { URL_API } = confs;
// Retrieve current state
//log
class Request  {
  // get method
  get(endpoint, params = {}, headers = {}) {
    return axios.get(URL_API + endpoint, this.getGetParams(params), headers).then(res => res.data.data);
  }
  // post method
  post(endpoint, params = {}, headers = {}) {
    return axios.post(URL_API + endpoint, qs.stringify(this.getPostParams(params)), this.getHeaders(headers)).then(res => res.data.data);
  }
  // put method
  put(endpoint, params = {}, headers = {}) {
    return axios.put(URL_API + endpoint, qs.stringify(this.getPostParams(params)), this.getHeaders(headers)).then(res => res.data.data);
  }
  // delete method
  delete(endpoint, params = {}, headers = {}) {
    return axios.delete(URL_API + endpoint, qs.stringify(this.getPostParams(params)), this.getHeaders(headers)).then(res => res.data.data);
  }

  getDefaultParameters () {
    let state = loadState();
    return {
      access_token: state.auth ? state.auth.user.token : '',
      cnx: (state.societes && state.societes.current_societe) ? state.societes.current_societe.id : 'no_cnx_provided',
    };
  }

  getDefaultHeaders() {
    let state = loadState();
    return {
      Authorization: 'Bearer ' + ((state.auth && state.auth.user.token) ? state.auth.user.token : 'NO.TOKEN.PROVIDED'),
      withCredentials: true,
    };
  }
  // Adding headers
  getHeaders(headers) {
    let realHeaders = {
      headers: {
        ...headers,
        ...this.getDefaultHeaders(),
      }
    };
    return realHeaders;
  }
  // Adding params for request
  getGetParams(params) {
    const realParams = {
      params: {
        ...params,
        ...this.getDefaultParameters(),
      }
    };
    return realParams;
  }

  getPostParams(params) {
    const realParams = {
      ...params,
      ...this.getDefaultParameters(),
    };

    return realParams;
  }

}

export default Request;
