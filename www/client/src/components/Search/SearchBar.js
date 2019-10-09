import React from 'react';
import IconButton from '../../lib/IconButton/IconButton';
import { confs } from '../../conf';
import { connect } from 'react-redux';
import { searchTodo } from '../Todos/actions';

const { PRIMARY_BG } = confs;

const style={
  container: {
    position: 'fixed',
    width: '100%',
    height: '54px',
    top: '0px',
    left: '0px',
    backgroundColor: PRIMARY_BG,
    padding: '.5rem',
    display: 'flex',
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
  },
  input: {
    border: 'none',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, .2)',
    padding: '.5rem',
    fontSize: '.9rem',
    width: '100%',
    color: 'white',
  }
};

class SearchBar extends React.Component {

  state = {
    open: false,
  };

  openSearch() {
    this.setState({
      open: true,
    }, () => this.input.focus());
  }

  closeSearch() {
    this.setState({
      open: false,
    }, () => this.props.searchTodo(""));
  }

  render() {
    const { open } = this.state;

    if (open) {
      return (
        <div
          style={style.container}
        >
          <div style={style.inputContainer}>
            <IconButton
              onClick={() => this.closeSearch()}
              icon={"arrow-left"}
            />
            <input
              onChange={(e) => this.props.searchTodo(e.target.value)}
              ref={input => this.input = input}
              type="search"
              style={style.input}
              placeholder={"Rechercher un numéro de todo"}
            />
            <IconButton />
          </div>
        </div>
      );
    }

    return <IconButton icon={"search"} onClick={() => this.openSearch()} />;

  }
}

export default connect(null, { searchTodo })(SearchBar);
