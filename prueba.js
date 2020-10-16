import React from 'react'

class mux extends React.Component{
    constructor(props){
        super(props)
        console.log('Constructor')

        this.state={
            info:[]
        }
    }

    componentDidMount(){
        fetch('https://api.mux.com/video/v1/live-streams',{
            method:'POST',
            headers:{
                
            }
        })
        .then(response=>response.text())
        .then(info=>this.setState({informacion:info.result }))
        console.log('mounted')
        this.setState({name:'name from componentDidMount'})
    }

    componentDidUpdate(){
        console.log('update')
    }

    render(){
        const name = this.state.info[0]
        return <h1> Hola </h1>

    }
}

export default mux