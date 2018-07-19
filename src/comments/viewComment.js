import React, { Component } from 'react';
import CardPost from '../post/card';
import Comments from './comments';
import logoAnonimo from '../img/anonimo.png';

import { animateScroll as scroll } from 'react-scroll'
import { Comments as allComments } from "../../src/data.json";
import Comment from './comment';
import FormComment from '../post/form-comment/formComment';
import './viewComments.css'
import PORTS from '../VARIABLES/PORTS';
import Posts from '../post/Posts';
import timeago from 'timeago.js';
import TimeAgoSpanish from "../timeAgo/es";
import './comment.css'

import SendComment from './sendComment';
import GetDateFormat from '../timeAgo/get-time';
timeago.register("spanish", TimeAgoSpanish)
const timeagoInstance = timeago(); // set the relative date here.

let date = new Date()
class ViewComment extends Component {
    state = {
        allComments, inputComment: "",
        Post: [], cargando: false,
        messageStatus: "Cargando...",
        name: "Anonimo",

    }
    componentDidMount() {
        scroll.scrollToTop();
    }

    componentWillMount() {

        fetch(`/getComments/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {

                    this.setState({ allComments: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: `error Con la api ${response.error}` })


                }
            })
        fetch(`/getPost/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {

                    this.setState({ Post: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: `error Con la api ${response.error}` })


                }




            })
    };


    submitButton = (e) => {
        const Comments = this.state.allComments;
        const body = {
            idpost: parseInt(this.props.match.params.postId, 0),
            iduser: 0,
            contenido: this.state.inputComment,
            src: "",
            creacion: GetDateFormat(date),
        }
        SendComment(body);
        Comments.push({
            Name: this.state.name,
            contenido: this.state.inputComment,
            time: date.toDateString,
            foto: logoAnonimo
        })

        e.preventDefault();
        scroll.scrollToBottom({ delay: 0, duration: 300 });

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
            <div >
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
                                        key={ key }>
                                        <Comment
                                            key={ key }
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