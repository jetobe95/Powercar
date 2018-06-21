import React, { Component } from 'react';
import CardPost from '../post/card';
import Comments from './comments';
import { Comments as allComments } from "../../src/data.json";
import Comment from './comment';
import FormComment from '../post/form-comment/formComment';
import './viewComments.css'
let date=new Date()

class ViewComment extends Component {
    state = { allComments,inputComment:"" }
   
        componentWillMount(){
            
        fetch(`http://localhost:3002/${this.props.idPost}`).then(response=>response.json())
        .then(data => console.log(data))
    };
    
    submitButton=(e)=>{
        const Comments=this.state.allComments;
        Comments.push({
            Name:this.state.inputComment,
            comment:this.state.inputComment,
            time:date.toDateString
        })
        
        e.preventDefault();
        
        this.setState({
            allComments:Comments
        }) 
    }
    onChangeInput=(e)=>{
        this.setState({
            inputComment:e.target.value
        })
        
    }
    
    
    render() {
        return (
            <div className="viewComments">
               
                <CardPost
                title={this.props.match.params.postId}
                description="Descripion del post"
                time="hace 1"
               
                hidden={true}
                />
                    <Comments>
                    {this.state.allComments.map((comment,key)=>(
                               <Comment
                               key={key}
                               Name={comment.name}
                               hidden={true}
                               time={comment.time}
                               Description={comment.comment}
                                /> 
                        ))}
                    </Comments>
                <FormComment
                submitButton={this.submitButton}
                onChangeInput={this.onChangeInput}
                />
            </div>
        );
    }
}

export default ViewComment;