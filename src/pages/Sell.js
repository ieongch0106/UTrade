import React, {useState} from 'react'
import { Button, Form } from '../components/Components'
import { useForm } from "react-hook-form";
import MultiImageInput from "react-multiple-image-input";



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

  const [images, setImages] = useState({});
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100"
  };

  function setData() {
    let obj = {product: content.product,
      condition: content.condition,
      category: content.category,
      location: content.location,
      price: content.price
    }
    sessionStorage.setItem("mySessionStorage", JSON.stringify(obj))
  }

  function getData() {
    let data = sessionStorage.getItem("mySessionStorage")
    data = JSON.parse(data)
    // console.log(data)
  }

  const content = (
      <>
        <div className='product_details' display="flex">
          <div>
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
              <select type="category">
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
          </div>
          <div display="flex">
          {/* for images */}
            <label>Upload up to 5 Images:
            <input type="file" images={images} setImages={setImages} name="images" placeholder=''></input>
            <br /><br />
            </label>
          </div>
          <Button onClick={() => this.setData()} type="submit" size="md" value="Continue" />
        </div>
      </>
    )

  return (
    <Form content={content} encType="multipart/form-data" width='95vw' textAlign= 'left' paddingLeft="20px" />
  )
}
