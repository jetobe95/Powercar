import React, { Component } from 'react';
import CardPost from '../post/card';
import Comments from './comments';
import { Comments as allComments } from "../../src/data.json";
import Comment from './comment';
import FormComment from '../post/form-comment/formComment';
import './viewComments.css'
import PORTS from '../VARIABLES/PORTS';
import Posts from '../post/Posts';
import timeago from 'timeago.js';
import TimeAgoSpanish from "../timeAgo/es";
import './comment.css'
timeago.register("spanish", TimeAgoSpanish)
const timeagoInstance = timeago(); // set the relative date here.

let date = new Date()
class ViewComment extends Component {
    state = { allComments, inputComment: "", Post: [], cargando: false, messageStatus: "Cargando..." }

    componentWillMount() {

        fetch(`http://localhost:${PORTS.API_PORT}/getComments/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {
                    console.log('Resulta', response.resul);
                    this.setState({ allComments: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: "Error Con la API:" + "Error: " + response.error })


                }
            })
        fetch(`http://localhost:${PORTS.API_PORT}/getPost/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {
                    console.log('Resulta', response.resul);
                    this.setState({ Post: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: "Error Con la API:" + "Error: " + response.error })


                }




            })
    };

    submitButton = (e) => {
        const Comments = this.state.allComments;
        Comments.push({
            Name: this.state.inputComment,
            Contenido: this.state.inputComment,
            time: date.toDateString
        })

        e.preventDefault();

        this.setState({
            allComments: Comments
        })
    }
    onChangeInput = (e) => {
        this.setState({
            inputComment: e.target.value
        })

    }


    render() {
        return (
            <div>
                { this.state.cargando ?
                    (

                        <Posts>
                            { this.state.Post.map(post => {
                                return (
                                    <CardPost
                                        //TODO Agregar Gif 
                                        hidden
                                        key={ post.idposts }
                                        title={ post.nickname }
                                        time={ timeagoInstance.format(post.creacion, 'spanish') }
                                        Description={ post.Contenido }
                                        Name={ post.nickname }
                                        src={ post.foto }
                                        idposts={ post.idposts }

                                    />)
                            }) }
                            <Comments>
                                { this.state.allComments.map((comment, key) => (
                                    <div className="Comment m-4"
                                        key={ comment.idcomments }>
                                        <Comment
                                            key={ comment.idcomments }
                                            Name={ comment.nickname }
                                            hidden={ true }
                                            time={ comment.time }
                                            Description={ comment.contenido }
                                            { ...comment }
                                        />

                                    </div>
                                )) }
                            </Comments>

                            <FormComment
                                submitButton={ this.submitButton }
                                onChangeInput={ this.onChangeInput }
                            />
                        </Posts>

                    ) : (
                        <h3>{ this.state.messageStatus }</h3>
                    )
                }

            </div>
        )

        // return (

        //     <div className="viewComments">

        //         <CardPost
        //             title={ this.props.match.params.postId }
        //             description="Descripion del post"
        //             time="hace 1"

        //             hidden={ true }
        //         />

        //     </div>
        // );
    }
}

export default ViewComment;