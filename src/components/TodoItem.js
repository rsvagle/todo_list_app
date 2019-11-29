import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            backgroundColor: '#f3f3f3',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>x</button>    
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
