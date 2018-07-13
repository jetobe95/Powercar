import React, { Component } from 'react';
import './index.css';
import App from './App';
import timeago from 'timeago.js';

import Posts from './post/Posts';
import CardPost from './post/card';
import { data } from '../src/data.json';
import { Container } from 'reactstrap';
import PORTS from './VARIABLES/PORTS';
import TimeAgoSpanish from './timeAgo/es';
timeago.register("spanish",TimeAgoSpanish)
const timeagoInstance = timeago(); // set the relative date here.


class Home extends Component {
    state = { Posts: [], cargando: false,messageStatus:"Cargando..." }
    componentDidMount() {
        fetch(`http://localhost:${PORTS.API_PORT}/getPosts`)
        .then(response => response.json())
        .then(response =>{
            if (response.status) {
                console.log('Resulta',response.resul);
                

                this.setState({cargando: !this.state.cargando,Posts: response.resul})
                
            }else{
                this.setState({messageStatus:"Error Con la API:"+"Error: "+response.error})

            }


        })
        
            }

               


    render() {
        const postData=this.state.Posts ||[];
        return (
            <App  >

                <Container>
                   <h5 className="m-3">Last Comments</h5>

                    { this.state.cargando &&this.state.Posts ?
                        (

                            <Posts>
                                { postData.map(post => {
                                    return (
                                        <CardPost
                                        //TODO Agregar Gif 
                                           
                                            key={ post.idposts }
                                            title={ post.nickname }
                                            time={ timeagoInstance.format(post.creacion, 'spanish') }
                                            Description={ post.Contenido }
                                            Name={ post.nickname }
                                            src={ post.foto }
                                            idposts={post.idposts}
                                        />)
                                }) }

                            </Posts>
                        ) : (
                            <h3>{this.state.messageStatus}</h3>
                        )
                    }

                </Container>

            </App >
        );
    }
}

export default Home;