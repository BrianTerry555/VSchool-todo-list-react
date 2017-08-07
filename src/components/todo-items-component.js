import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <h3 style={{display: this.props.input.edit ? "none":"inherit"}}>Item: {this.props.item.title}</h3>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("title", event);}} value={this.props.title} placeholder="Item"/>

        <p style={{display: this.props.input.edit ? "none":"inherit"}}>Description: {this.props.item.description}</p>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("description", event);}} value={this.props.description} placeholder="Description"/>

        <p style={{display: this.props.input.edit ? "none":"inherit"}}>$ {this.props.item.price}</p>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("price", event);}} value={this.props.price} placeholder="Price"/>

        <button onClick={()=>{this.props.handleRemove(this.props.item._id);}} className="delete">X</button>
        <button onClick={()=>{this.props.toggleEdit();}} style={{display: this.props.input.edit ? "none":"inherit"}} className="edit btn btn-danger btn-sm">Edit</button>
        <button onClick={()=>{this.props.handleUpdate(this.props.item._id, this.props.input); this.props.toggleEdit();}} style={{display: this.props.input.edit ? "inherit":"none"}} className="save btn btn-danger btn-sm">Save</button>
      </div>
    )
  }
}

export default TodoItem;
