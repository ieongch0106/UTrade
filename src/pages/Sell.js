import React from 'react'
import { Button, Form } from '../components/Components'
import { useForm } from "react-hook-form";

export default function Sell(props) {
  const { register, handleRegister } = useForm();
  const Category = [
    { label: 'Appliance', value: 'appliance' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Rentals', value: 'rentals' },
    { label: 'Eletronics', value: 'electronics' },
    { label: 'Vehicles', value: 'vehicles' },
    { label: 'Miscellaneous', value: 'miscellaneous' },
  ]

  const content = (
      <>
        <div className='product_details'>
          <h3>What would you like to sell?</h3>
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
          <Button type="submit" size="md" value="Continue" />
        </div>
        <div margin-right="0">
          {/* for images */}
        </div>
          {/* <label>Upload up to 5 Images:
          <input type="text" name="images" placeholder=''></input>
          <br /><br />
        </label> */}
        {/* placeholder link to home rn (should actually take to next page) */}
        
      </>
    )

  return (
    <Form content={content} width='95vw' textAlign= 'left' paddingLeft="20px" />
  )
}
