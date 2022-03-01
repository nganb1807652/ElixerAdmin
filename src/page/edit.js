
import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
export default function Edit(props) {



    const [data, setData]=React.useState({});
    const [nameProduct, setNameProduct]=React.useState('');
    const [priceProduct, setPriceProduct]=React.useState('');
    const [typeProduct, setTypeProduct]=React.useState('');
    const [quantityProduct, setQuantityProduct]=React.useState('');
    const [descriptionProduct, setDescriptionProduct]=React.useState('');
    const [imageProduct, setImageProduct]=React.useState([]);
    // console.log(props.match.params.id);
    
    const idproduct=props.match.params.id;
    const getData = ()=>{
        axios.get("http://localhost:8080/edit/id="+props.match.params.id)
        .then(dt=>{
            setData(dt.data);
         })
    
    }
     React.useEffect(() => {
        getData()

    }, [])

      
        const editName = (e) => {
        setNameProduct(e.target.value);
        }
        
        const editPrice = (e) => {
        setPriceProduct(e.target.value);
        }

        const editType = (e) => {
        setTypeProduct(e.target.value);
        }
        const editQuantity = (e) => {
        setQuantityProduct(e.target.value);
        }
        const editDescription = (e) => {
            setDescriptionProduct(e.target.value);
        }
        const editImage = (e) => {
        setImageProduct(e.target.files[0].name);
        }

        const submitForm = async (e) =>{ 
             e.preventDefault();
            const obj =  {
            id: idproduct,
            nameedit : nameProduct,
            priceedit : priceProduct,
            quantityedit : quantityProduct,
            typeedit : typeProduct,
            descriptionedit : descriptionProduct,
            imageedit : "http://localhost:8080/images/"+imageProduct 
            }
            
            axios.post('http://localhost:8080/editProduct', obj )
            .then(dt => {
            swal({
                title: "SUCCESS!",
                icon: "success",
            });
            window.location.href = "/"
            })
       

        }
        console.log(data);
return (
    
        <div style={{ width:900, margin: 'auto', }}>
            <form onSubmit={submitForm}>
            <div class="form-row" >
                <div class="form-group col-md-6" >
                <label>Name product</label>
                <input type="text" class="form-control" id="inputname" style={{ height:40}} placeholder={data.name} onChange={editName}/>
                </div>
                <div class="form-group col-md-6">
                <label >Price</label>
                <input type="number" class="form-control" id="inputprice" style={{ height:40}} placeholder={data.price} onChange={editPrice}/>
                </div>
            </div>
            <div class="form-group">
                <label>Quantity</label>
                <input type="number" class="form-control" id="inputquatity" style={{ height:40}} placeholder={data.quantity} onChange={editQuantity}/>
            </div>
            <div class="form-group">
                <label>Type</label>
                <input type="text" class="form-control" id="inputtype" placeholder={"(cake or drink)"}  onChange={editType} placeholder={data.type} style={{ height:40}} />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>Description</label>
                <input type="text" class="form-control" id="inputdescription" style={{ height:40}} onChange={editDescription} placeholder={data.description} />
                </div>
                <div class="form-group col-md-4">
                <label>Image</label>
                <input type="file" class="form-control" id="inputimage" style={{ height:40, fontSize:13}} onChange={editImage} />
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
