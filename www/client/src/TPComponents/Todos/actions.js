export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

export const POST_TODO = 'POST_TODO';
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';
export const POST_TODO_FAILED = 'POST_TODO_FAILED';

//
export const fetchTodos = () => ({
    type: FETCH_TODOS,
});
//
export const postTodo = (todo) => ({
    type: POST_TODO,
    payload: todo
});