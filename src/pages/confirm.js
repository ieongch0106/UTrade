import React, {useState} from 'react'
import { Button, Form } from '../components/Components'
import { useForm } from "react-hook-form";
import MultiImageInput from "react-multiple-image-input";
import './Sell.js'

export default function Sell(props) {
  const { register, handleRegister } = useForm();

  const content = (
    <>
    <h2>test</h2>
    <div className="main_div">
        <div fclassName="left">
        <p>Product</p>
        {/* content.product */}
        <p>Seller Name</p>
        <p>Price</p>
        {/* content.price */}
        <p>Location</p>
        {/* content.location */}
    </div>
    <div className="right">
        <h2>right</h2>
    </div>
    </div>
    <p textAlign="right">hi h ih ih ii hi</p>
    <Button onClick={() => this.getData()} type="submit" size="md" value="Finish" />
    </>
    )

  return (
    <Form content={content} encType="multipart/form-data" width='95vw' textAlign= 'left' paddingLeft="20px" />
  )
}



/* 
<label>Name of product:
            <input type="text" name="product" placeholder='Enter product' required />
          </label>
            <br />
          <label>Condition:
            <input type="text" name="condition" placeholder='e.g. Good, used' />
          </label>
            <br />
          <label>Category:
              <select>
                <option>select</option>
                <option>appliance</option>
                <option>vehicles</option>
                <option>rentals</option>
                <option>apparel</option>
                <option>misc</option>
              </select>
          </label>
            <br />
          <label>Product Description:&nbsp;
            
          </label>
          <br/>
          <textarea cols={40} rows={5} style={{resize: 'none', fontFamily: 'inherit'}} placeholder="e.g. price can be negotiated, contact me by phone +1 123-456-7890" />
          <br />
          <label>Your Location:
            <input type="text" name="location" placeholder='Amherst, MA' />
          </label>
            <br />
          <label>Selling Price: $
            <input
              type="number"
              name="price"
              min={0.00}
              max={1000000} 
              step={0.01}
              placeholder='0'
              {...register("price", {
                valueAsNumber: true,
              })}
            />
          </label>
            <br />
*/