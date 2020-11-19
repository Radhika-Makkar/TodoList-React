import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state=
    {
        title:''
    }
    onChange=(e) => this.setState({[e.target.name]:e.target.value});
    onSubmit=(e) =>
    {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render() {
        return (
          <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
              <input type="text" value={this.state.title} name='title' onChange={this.onChange} style={{flex:'10',padding:'5px'}} type="text" name="title" placeholder="Add To DO....."></input>
              <input type="submit" value="submit" className="btn" style={{flex:'1'}}></input>
          </form>
        )
    }
}
AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
