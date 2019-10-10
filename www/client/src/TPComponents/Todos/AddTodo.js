import React from "react";
import { connect } from 'react-redux';
import { postTodo } from "./actions";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => console.log(this.state));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postTodo(this.state);
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                Ajouter votre nouvelle tâche:
                <form
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <textarea
                        name="name"
                        className={"form-control"}
                        onChange={(e) => this.handleChange(e)}
                    >{name}</textarea>
                    <button
                        disabled={!(name && name.length)}
                        className={'btn btn-primary btn-block my-2'}
                    >
                        Ajouter la tâche
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { postTodo })(AddTodo);