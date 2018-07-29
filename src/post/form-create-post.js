import React, { Component } from 'react';
import GetDateFormat from '../timeAgo/get-time';
import './create-post.css';
import AddPost from '../services/add-post';
// import {Redirect } from 'react-router-dom';



export default class FormCreatePost extends Component {
    handleSubmitPost = (event) => {
        event.preventDefault();
        const $form = new FormData(this.ref);
        const iduser = 1;//FIXME: hay que cambiarlo cuando el login sea aplicado
        const contenido = $form.get("comment");
        const src = "http://www.forestcar.com.ar/static/nuevo_cruze_testdrive_.jpg"; //TODO:AGREGAR INPUT TIPO FILE
        const creacion = GetDateFormat();
        const post = { iduser, contenido, src, creacion }

        AddPost(post)
            .then(response => {
                console.log("Response", response)
                event.reset()
        })
      
    }



    render() {
        return (
            <div className="container">
                    <div className="row justify-content-center m-4">
                        <form 
                             ref={ ref => this.ref = ref }
                                onSubmit={ this.handleSubmitPost }>
                            <h4 className="Discuss-your-idea">Create post</h4>
                       
                        <div className="form-group">
                            <label className="create-post-label" htmlFor="nick">Nickname</label>
                            <input className="form-control create-post"
                                required
                                id="nick" type="text" placeholder="Your Nickname"
                                name="nick"
                            />
                        </div>
                        <div className="form-group">
                            <label className="create-post-label" htmlFor="title">Title</label>
                            <input required className="form-control create-post"
                                id="title"
                                name="title"
                                type="text" placeholder="write your title.." />
                        </div>
                        <div className="form-group">
                            <label className="create-post-label" htmlFor="nick">Comment</label>
                            <textarea required className="form-control create-post"
                                name="comment"
                                id="nick" placeholder="write a comment.." />
                        </div>
                        <div className="form-row justify-content-center">
                            <button type="submit" className="btn btn-success btn-block Make-post right">publish</button>
                        </div>

                </form>
                    </div>
            </div>
        )
    }
};
