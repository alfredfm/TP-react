import Request from '../../Request';
//
const request = new Request();
//
export const users = {
  fetchUsers: () => request.get('/users'),
};
