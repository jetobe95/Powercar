import React from 'react';
import Logo from '../../images/header/component/logo';
import "./login.css";
function Login(props) {


    return (
        <div className="container">

            <div className="row justify-content-center">

                <Logo />
            </div>
            <div className="row justify-content-center">

                <h5 className="Title">
                    Register in 20 seconds
             </h5>
            </div>
            <div className="row justify-content-center ">
                <form >

                    <label htmlFor="" data-domain="Name">

                    <input type="text" className="form-control Rectangle-2 m-4" />
                    </label>
                    <label htmlFor="" data-domain="E-mail">

                    <input type="text" className="form-control Rectangle-2 m-4" />
                    </label>
                    <label htmlFor="" data-domain="Password">

                    <input type="password" className="form-control Rectangle-2 m-4" />
                    </label>
                 
                    <button className="Rectangle-2-Copy-3" >Registrar</button>

                </form>
            </div>
        </div>
    );

}

export default Login