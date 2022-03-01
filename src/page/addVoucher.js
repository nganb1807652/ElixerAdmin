import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import swal from 'sweetalert';

export default function ADDVoucher() {
  
const [code, setCode]=React.useState('');
const [condition, setCondition]=React.useState('');
const [price, setPrice]=React.useState('');
const [description, setDescription]=React.useState('');

const handleCode = (e) => {
  // const nameproduct = e.target.value;
  setCode(e.target.value);
}
  
const handleCondition = (e) => {
  setCondition(e.target.value);
}

const handlePrice = (e) => {
  setPrice(e.target.value);
}
const handleDescription = (e) => {
  setDescription(e.target.value);
}
const submitForm = (e) =>{
  e.preventDefault();
  const obj =  {
    code1 : code,
    con1 : condition,
    price1 : price,
    des1: description
  }
 
  axios.post('http://localhost:8080/addVouccher', obj )
   .then(dt => {  
     swal({
       title: "SUCCESS!",
       icon: "success",
     });
     window.location.href = "/"
 
     })
 
}

    return(
            <div style={{ width:900, margin: 'auto', }}>
              <div style={{textAlign:'center', fontWeight:'bold', fontSize: 20, marginBottom: 20, color: '#990000'}}>ADD DISCOUNT</div>
    <form  onSubmit={submitForm}>
      <div class="form-row" >
        <div class="form-group col-md-6" >
          <label>Code Discount</label>
          <input type="text" class="form-control" id="inputcode" style={{ height:40}} onChange={handleCode} />
        </div>
        <div class="form-group col-md-6">
          <label >Condition</label>
          <input type="text" class="form-control" id="inputcondition" style={{ height:40}} onChange={handleCondition}/>
        </div>
      </div>
      <div class="form-group">
        <label>Price Discount</label>
        <input type="text" class="form-control" id="inputprice" style={{ height:40}} onChange={handlePrice} />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" id="inputdescription"  style={{ height:40}} onChange={handleDescription}/>
      </div>
      <div style={{display: 'inline'}}>
    <button type="submit" class="btn btn-primary" style={{marginRight: 10 }}>Submit</button>
    <Link to="/" style={{textDecoration: 'none'}}> <button type="button" class="btn btn-outline-secondary"  style={{marginLeft: 10 }}> Back to Home</button></Link>
  </div>
    </form>
    </div>
    )
}