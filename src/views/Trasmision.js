import React, { useEffect, useContext ,useState} from "react";
import Header from "../components/Header";
import { Layout } from "antd";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";
import { Form, Icon, Input, Button } from "antd";
import {Link} from "react-router-dom"

const Trasmitir=({history}) =>{
    const { Content, Footer } = Layout;
    const { usuario } = useContext(Auth);
    const [nombre, setnombre] = useState(null)

    useEffect(() => {
        
        if (usuario===null) {
            history.push("/login");
        }

        usuario?usuario.displayName?setnombre(usuario.displayName):setnombre(usuario.email):setnombre(null)
       
    }, [history, usuario]);

    
        return (
            <Layout style={{ height: "100vh" }}>
                <Header
                    titulo="Chiper"
                    subtitulo=""
                />
                <Content style={{ padding: "0 50px", marginTop: 40 }}>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: "80vh"
                        }}
                    >
                        {nombre}

                        <div
                            style={{
                                padding:100,
                                justifyContent:"center",
                                display:"flex"
                            
                              

                            }}
                        
                        >


                            <h1>Aca podras visualizar los datos para tu trasmisión</h1>
                            

                    </div>
                    </div>


                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Chiper tu aliado digital
                </Footer>
            </Layout>
        );
    
}
export default withRouter(Trasmitir);