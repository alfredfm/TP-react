import React from "react";
import { connect } from 'react-redux';
import { fetchTodos } from "./actions";
import AddTodo from "./AddTodo";

const style = {
    todo: {
        padding: '.5rem',
        marginBottom: '.5rem',
        borderRadius: '3px',
        boxShadow: '0 0 5px rgba(0,0,0,.3)',
    },
    container: {
        margin: '.5rem',
    }
}

class Todos extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    //
    render() {
        const { todos, isFetching } = this.props;

        return (
            <div
                style={style.container}
            >
                <AddTodo />
                {
                    isFetching ? 'Loading ...' : ''
                }
                {todos && todos.map(Todo)}
            </div>
        );
    }
}

const Todo = (todo, key) => (
    <div
        key={key}
        style={style.todo}
    >
        {todo.name}
        <div>{todo.is_done > 0 ? 'Fait' : 'A faire'}</div>
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos.todos,
    isFetching: state.todos.isFetching,
});

export default connect(mapStateToProps, { fetchTodos })(Todos);