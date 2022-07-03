import React, { useEffect, useState } from 'react';
import { addToDb } from '../Utilities/fakeDb';
const Products = ( ) => {
    const [products, setProducts] = useState([]);
    const [inventory, setInventory] = useState([]);
    

    const [sumtotal, setSumtotal] = useState(null);
    const [cart, setCart] = useState([]);
    const[productCard,setProductCard]=useState('');
  
    const [matchProducts, setMatchProduct] = useState([]);

    useEffect(() => {
        fetch("https://fec-inventory-api.herokuapp.com/product-info")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        fetch(" https://fec-inventory-api.herokuapp.com/inventory-info")
            .then((res) => res.json())
            .then((data) => setInventory(data));
    }, []);




    const handleAddToCart = (meal) => {
        let newCart = [...cart, meal];
       //  console.log(newCart);
        setCart(newCart);
       

    // console.log(cart);
    };


    
    let filtered = [];
    for (let arr in inventory) {
        for (let filter in cart) {
            if (inventory[arr].product_id === cart[filter].id) {
                filtered.push(inventory[arr]);
                addToDb(inventory[arr].id)
            
            }
        }
    }
    
    const total = filtered.reduce((prev, curr) => prev + parseFloat(curr.unit_price), 0);
    console.log(total);

   // setSumtotal(total);
     

     
    return (

        <>
            <div className="grid grid-cols-2   container">
           
                <div className="grid grid-cols-2 ">
                   
                    {products.map((p) => (
                        <div className=" ">
                            <div
                                className="w-25 h-25 fw-bold"
                                style={{
                                    border: "2px solid green",
                                    margin: "10px",
                                    padding: "5px",
                                    
                                }}
                            >
                                <li>Name: {p.name}</li>
                                <p>ID: {p.id}</p>
                                <button className="decoration-pink-600" onClick={() => handleAddToCart(p)}>add to cart</button>
                            </div>
                        </div>
                    ))}


                </div>

                <div className="col-4 text-dark  ">
                    <h1>cart section= {filtered.length}</h1>
                    {filtered.map(mp => (
                        <div className="border fw-bold m-5   bg-success">
                         
                            <li >productId: {mp.product_id}</li>
                            <li>Price: {mp.unit_price}</li>
                            <li>quantity {mp.qty}</li>
                           {/* <li>Total:{}</li> */}
                            
                        </div>
                    ))}
                </div>
            </div>
        </>


    );
};

export default Products;