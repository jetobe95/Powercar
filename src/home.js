import React,{Component} from 'react';
import './index.css';
import App from './App';
import timeago from 'timeago.js';

import Posts from './post/Posts';
import CardPost from './post/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../src/data.json';
import { Container } from 'reactstrap';
const timeagoInstance = timeago(); // set the relative date here.


class Home extends Component {
    state = { Posts:"",cargando:false }
    componentWillMount(){
        fetch('http://semper.serveo.net/posts').then(response=>response.json())
        .then(db => 
            this.setState(
                {
                    cargando:!this.state.cargando,
                    Posts:db
                
                }
            )
        
        )
        
    }
    
    render() {
        return (
            <App  >
            
            <Container>
            
           { this.state.cargando?
           (

             <Posts>
               { this.state.Posts.map((e,i)=>{
                 return(
                    <CardPost
                    key={i}
                    title={e.title}
                    time={timeagoInstance.format(e.created_at, 'us')   }
                    Description={e.content}
                    Name={e.name}
                    src={e.image}
                    />) 
               })}
               
            </Posts>
           ) :(
               <h3>Cargando...</h3>
           )
           }
    
            </Container>
    
        </App >
        );
    }
}

export default Home;