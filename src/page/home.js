
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import swal  from 'sweetalert';
// import Cookies from 'universal-cookie';
// import swal from 'sweetalert';
export default function Home() {
    let stt = 0
    const [data ,setData] = React.useState([])
    
    

    const getData = ()=>{
        axios.get("http://localhost:8080/data")
        .then(dt=>{
            setData(dt.data)
        })
    
    }
    const deleteItem = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
             
                axios.post("http://localhost:8080/delete", {id})
                .then(dt=>{
                    if(dt){
                        window.location.href = "/"
                    }
            
                    })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    React.useEffect(() => {
        getData()

    }, [])
    
  return (
    <div>
         <div style={{display: 'flex'  , width: '100%', float: 'right'}}>
            <div style={{width: '85%'}}></div>
            <div style={{width: '15%'}}>
                <div style={{display: 'flex' }}>
                    <label style={{color: '#be1b28'}}>Add new product</label>
                    &ensp;
                    <td><Link to="/add" style={{textDecoration: 'none'}}>< i class="icon-plus"  style={{color: '#be1b28'}} ></i></Link></td>
                </div>
                <div style={{display: 'flex' }}>
                    <label style={{color: '#be1b28'}}>Add Discount</label>
                    &ensp;
                    <td><Link to="/addVoucher" style={{textDecoration: 'none'}}>< i class="icon-plus"  style={{color: '#be1b28'}} ></i></Link></td>
                </div>
            </div>  
            
        </div>
        <table class="table table-striped">
        
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Image</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(item=>(
                    
                <tr>
                    <th scope="row">{stt+=1}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                    <td>
                        <img src={item.images[0]?.imgimg} style={{width: 50 , height: 50}}/>
                    </td>
                    <td>
                        <Link to={'/edit/id='+item._id} style={{color: "black" , textDecoration: 'none'}}>
                             <i class="icon-pencil" ></i>
                        </Link>
                        
                    </td>
                    <td>
                        
                        <i class="icon-trash" onClick={() =>deleteItem(item._id)}></i>
                            
                    </td>
                </tr>
                ))
            }
            
            
            </tbody>
    </table> 
</div>
  )
}

 
