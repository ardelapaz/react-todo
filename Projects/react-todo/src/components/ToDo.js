import React, { Component } from 'react';


class ToDo extends Component {
    render() {
      return (
        <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete} />
         <button onClick= {(e) => this.props.deleteTodo } ></button> 
         {/* weird button want to change but it's broken i'm so lost */}
         <span>{ this.props.description }</span>
       </li>
      );
    }
  }
  export default ToDo;