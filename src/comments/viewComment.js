import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import timeago from 'timeago.js';
import { Comments as allComments } from "../../src/data.json";
import logoAnonimo from '../img/anonimo.png';
import CardPost from '../post/card';
import FormComment from '../post/form-comment/formComment';
import Posts from '../post/Posts';
import TimeAgoSpanish from "../timeAgo/es";
import GetDateFormat from '../timeAgo/get-time';
import PORTS from '../VARIABLES/PORTS';
import Comment from './comment';
import './comment.css';
import Comments from './comments';
import SendComment from './sendComment';
import loadingLogo from "../images/loader.gif";
import './viewComments.css';


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

        fetch(`${PORTS.SERVER_IP_DEV}/getComments/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {

                    this.setState({ allComments: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: `Error en la api ${response.error.errno} !!` })


                }
            })
        fetch(`${PORTS.SERVER_IP_DEV}/getPost/${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {

                    this.setState({ Post: response.resul, cargando: true })
                } else {
                    this.setState({ messageStatus: `Error Con la API!!!` })


                }




            })
            scroll.scrollToTop();
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
        console.log("body form",body)
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
            <div className="container" >
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
                                    <div className="Comment m-3"
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
                        
                       
                        <img src={loadingLogo} alt=""
                            width={40}
                            height={40}
                        />
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