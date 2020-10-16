import React from "react";
import { PageHeader, Button } from "antd";
import app from '../firebaseConfig'
import {Link} from "react-router-dom"

export default function Header({titulo,subtitulo}) {
    return (
        <PageHeader
            style={{
                border: "1px solid rgb(235, 237, 240)"
            }}

            title={titulo}
            subTitle={subtitulo}
            extra={[

                <Link to="/">

                    <Button
                          type="primary"
                          className="Iniciar-tras"
                        style={{

                            marginRight:40
                        }}
                    
                    >Inicio</Button>


                </Link>,
                <Button onClick={() => app.auth().signOut()} key="logout" type="primary">Cerrar Sesión</Button>,
                
              ]}
        />
    );
}
