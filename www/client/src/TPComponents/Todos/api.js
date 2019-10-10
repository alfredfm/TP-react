import axios from 'axios';
import qs from 'qs';
import { confs } from '../../conf';

const { URL_API } = confs;

export const todos = {
    fetchTodos: () => axios.get(URL_API+'/todos')
        .then(data => data.data),
    postTodo: (todo) => axios.post(URL_API + "/todos", qs.stringify(todo))
        .then(data => data.data),
};