import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    //const { product_id, qty, box_no, unit_price, unit, note } = console.log(props.inven);
    const { name, id, description, category, manufacturer } = props.product;




    return (
        <div class="p-5 m-5 ">

            {/* <div class="bg-yellow-100 shadow-lg rounded-2xl">
               <h1 class="font-bold">{name}</h1>
               <p>{description}</p>
                <div class="flex justify-between gap-2 rounded-2xl p-2 ">
                    <button class="bg-yellow-500 ">Add to cart</button>
                    <button class="bg-yellow-500">View Details</button>
                </div>  

            </div>*/}
            <Card class="bg-yellow-100 shadow-lg rounded-2xl " style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/1000px1800" />
                <Card.Body class="flex justify-between">
                    <div>
                        <Card.Title class="font-bold" >{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>
                    <div class="justify-between">
                        <Button class="bg-yellow-500">Add to cart</Button>{' '}
                        <Button variant="primary">View Details</Button>
                    </div>

                </Card.Body>
            </Card>



        </div >
    );
};

export default Product;