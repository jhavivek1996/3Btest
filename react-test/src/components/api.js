import React from 'react';
import axios from 'axios';
import'bootstrap/dist/css/bootstrap.min.css';
// import {Table} from 'react-bootstrap';


export default class Api extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
        
        }
        axios('https://jsonplaceholder.typicode.com/users')
        .then(result=>{console.log(result);this.setState({users:result.data});})
    
               
    }
    
      
    render(){
        return(<div>
     <div><UserDetails user={this.state.users} /></div>
        </div>)
    }
}

const UserDetails =(props)=>{
    console.log(props);
    return(<table className="table">
        <thead className="bg-dark text-light"><tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
        </tr></thead>
    <tbody>
    {props.user.map((e)=><tr>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        </tr>)}
    </tbody>
    </table>)
}