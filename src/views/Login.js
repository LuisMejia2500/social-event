import React, { useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import { Form, Icon, Input, Button } from "antd";
import Signup from "./Signup";
import { withRouter } from "react-router";
import * as firebase from "firebase/app";
import app from "../firebaseConfig";
import { Auth } from "../context/AuthContext";
import Errores from '../components/Errores'
import unnamed from '../images/unnamed.png'

const Login = ({ history }) => {


    const { Content, Footer } = Layout;
    const [signup, setsignup] = useState(false);
    const { usuario } = useContext(Auth);
    const [error, seterror] = useState('')

    useEffect(() => {
        if (usuario) {
            history.push("/");
        }
    }, [history, usuario]);

    const correoClave = async e => {
        e.preventDefault();
        const { usuario, clave } = e.target.elements;

        await app
            .auth()
            .signInWithEmailAndPassword(usuario.value, clave.value)
            .then(result => {
                console.log(result);
                history.push("/");
            })
            .catch(error => {
                seterror(error.message)
            });
        
    };


  



    return (
        <Layout style={{ height: "100vh" }}>
            <Content
                style={{
                    padding: "0 50px",
                    marginTop: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        padding: 24,
                        height: 450,
                        width: 400,
                        textAlign: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        display: "flex"
                    }}
                >

                    <div
                        style={{
                            justifyContent:"center",
                            padding:3
                        }}
                    
                    >
                    <img
                        style={{
                            height:100,
                            width:100,
                    
                        }}

                        src={unnamed} alt="Logo chiper"/>
                    </div>


                    
                    {!signup ? (
                        <Form className="login-form" onSubmit={correoClave}>
                            <Form.Item>
                                <h1>Ingreso</h1>
                            </Form.Item>
                            {error? <Form.Item><Errores mensaje={error}/></Form.Item>:null}
                            <Form.Item>
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    name="usuario"
                                    placeholder="Usuario"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    name="clave"
                                    type="password"
                                    placeholder="Clave"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    
                
                                    color=" color:rgba(250,2,54)"
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                  
                                    style={{
                                       
                                         marginRight: 10 }}
                                >
                                    Ingresa
                                </Button>
                               
                               
                            </Form.Item>
                            
                        </Form>
                    ) : (
                        <Signup setsignup={setsignup} />
                    )}
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Chiper tu aliado digital
            </Footer>
        </Layout>
    );
};
export default withRouter(Login);
