import React from "react";
import TodoItemsContainer from "../containers/todo-items-container.js";

class TodoList extends React.Component {
  genItems() {
    return this.props.items.map((item, index) => {
      return <TodoItemsContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} key={item.title + index} item={item}/>
    })
  }
  render() {
    return (
      <div className="list">
        {this.genItems()}
      </div>

    );
  }
}

export default TodoList;
