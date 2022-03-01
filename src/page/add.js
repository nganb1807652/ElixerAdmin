
import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
export default function Add() {



const [nameProduct, setNameProduct]=React.useState('');
const [priceProduct, setPriceProduct]=React.useState('');
const [typeProduct, setTypeProduct]=React.useState('');
const [quantityProduct, setQuantityProduct]=React.useState('');
const [descriptionProduct, setDescriptionProduct]=React.useState('');
const [imageProduct, setImageProduct]=React.useState([]);





const handleName = (e) => {
  // const nameproduct = e.target.value;
  setNameProduct(e.target.value);
}
  
const handlePrice = (e) => {
  setPriceProduct(e.target.value);
}

const handleType = (e) => {
  setTypeProduct(e.target.value);
}
const handleQuantity = (e) => {
  setQuantityProduct(e.target.value);
}
const handleDescription = (e) => {
  setDescriptionProduct(e.target.value);
}
const handleImage = (e) => {
  setImageProduct(e.target.files[0].name);
}
// console.log(imageProduct);


const submitForm = (e) =>{
  e.preventDefault();
  const obj =  {
    namep : nameProduct,
    pricep : priceProduct,
    quantityp : quantityProduct,
    typep : typeProduct,
    descriptionp : descriptionProduct,
    imagep : "http://localhost:8080/images/"+imageProduct 
  }
  axios.post('http://localhost:8080/addProduct', obj )
   .then(dt => {  
     swal({
       title: "SUCCESS!",
       icon: "success",
     });
     window.location.href = "/"
    })
 
}

return (
<div style={{ width:900, margin: 'auto', }}>
<div style={{textAlign:'center', fontWeight:'bold', fontSize: 20, marginBottom: 20, color: '#990000'}}>ADD PRODUCT</div>

<form onSubmit={submitForm}>
  <div class="form-row" >
    <div class="form-group col-md-6" >
      <label>Name product</label>
      <input type="text" class="form-control" id="inputname" style={{ height:40}} onChange={handleName} />
    </div>
    <div class="form-group col-md-6">
      <label >Price</label>
      <input type="number" class="form-control" id="inputprice" style={{ height:40}} onChange={handlePrice}/>
    </div>
  </div>
  <div class="form-group">
    <label>Quantity</label>
    <input type="number" class="form-control" id="inputquatity" style={{ height:40}} onChange={handleQuantity} />
  </div>
  <div class="form-group">
    <label>Type</label>
    <input type="text" class="form-control" id="inputtype" placeholder="(cake or drink)" style={{ height:40}} onChange={handleType}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Description</label>
      <input type="text" class="form-control" id="inputdescription" style={{ height:40}} onChange={handleDescription}/>
    </div>
    <div class="form-group col-md-4">
      <label>Image</label>
      <input type="file" class="form-control" id="inputimage" style={{ height:40, fontSize:13}} onChange={handleImage} />
    </div>
  </div>
  <div style={{display: 'inline'}}>
    <button type="submit" class="btn btn-primary" style={{marginRight: 10 }}>Submit</button>
    <Link to="/" style={{textDecoration: 'none'}}> <button type="button" class="btn btn-outline-secondary"  style={{marginLeft: 10 }}> Back to Home</button></Link>
  </div>
</form>
</div>
  )
}
