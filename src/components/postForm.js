import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createfetchPost } from '../actions/postActions';
// import PropTypes from 'prop-types';
 
 class PostForm extends Component {
     constructor(props){
         super(props);
         this.state={
                title:'',
                body:''
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }
     onChange(e){
         this.setState(
             {[e.target.name]:e.target.value}
            )
     }

     onSubmit(e){
         e.preventDefault();
         const post ={
             title:this.state.title,
             body:this.state.body
         }
         this.props.createfetchPost(post)
         

         
     }
  render() {

    return (
      <div>
        <h2>Add post</h2>
        <form onSubmit={this.onSubmit}>
            <div>
            
            <label>
            title:<br/>
            
            </label>
            <input  type="text" onChange={this.onChange} value={this.state.title}  name="title"/>
            <br/>
            <label>
            Body:<br/></label>
            <textarea onChange={this.onChange} value={this.state.body} name="body"/>
            <br/>
            <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

PostForm.PropTypes={
    createfetchPost:PropTypes.func.isRequired
}

export default connect(null,{createfetchPost}) (PostForm);