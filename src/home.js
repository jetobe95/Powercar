import React, { Component } from 'react';
import timeago from 'timeago.js';
import App from './App';
import './index.css';
import CardPost from './post/card';
import Posts from './post/Posts';
import TimeAgoSpanish from './timeAgo/es';
import PORTS from './VARIABLES/PORTS';
import LoadingLogo from "./images/loader.gif";
timeago.register("spanish", TimeAgoSpanish)
const timeagoInstance = timeago(); // set the relative date here.


class Home extends Component {
    state = { Posts: [], cargando: false, messageStatus: "Cargando..." }
    componentDidMount() {
        fetch(`${PORTS.SERVER_IP_DEV}/getPosts`)
            .then(response => response.json())
            .then(response => {
                if (response.status) {
                    console.log('Resulta', response.resul);
                    this.setState({ cargando: !this.state.cargando, Posts: response.resul })

                } else {
                    this.setState({ messageStatus: `Error en la api \n ${response.error.errno || ""}` })

                }
            })

    }

    render() {
        const postData = this.state.Posts || [];
        return (
            <App  >

                <div className="container">
                    <h5 className="">Last Comments</h5>
                    {/* <div className="row"> */}


                    { this.state.cargando && this.state.Posts ?
                        (

                            <Posts>
                                { postData.map(post => {
                                    return (
                                        <CardPost
                                            //TODO Agregar Gif 
                                            confirmRedirect
                                            key={ post.idposts }
                                            title={ post.nickname }
                                            time={ timeagoInstance.format(post.creacion, 'spanish') }
                                            Description={ post.Contenido }
                                            Name={ post.nickname }
                                            src={ post.foto }
                                            idposts={ post.idposts }
                                        />)
                                }) }

                            </Posts>
                        ) : (
                            <img src={LoadingLogo} alt=""
                            width={40}
                            height={40}
                        />
                        )
                    }
                    </div>


                {/* </div> */}

            </App >
        );
    }
}

export default Home;






