import React from 'react'
import { Button, Form } from '../components/Components'
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { Link } from "react-router-dom";

export default function Sell() {
    const content = (
        <>
          <div className='product_details'>
            <h3>What would you like to sell?</h3>
            <label>Name of product:
              <input type="text" name="product" placeholder='Enter product'></input>
              <br />
            </label>
            <label>Condition:
              <input type="text" name="condition" placeholder='e.g. Good, used'></input>
              <br /><br />
            </label>
            <label>Category:
              <input type="text" name="category" placeholder='e.g. Appliance, apparel'></input>
              <br /><br />
            </label>
            <label>Product Description:
              <input type="textarea" multiline={true} name="description" placeholder='Brief description of your product'></input>
              {/* <TextBoxComponent multiline={true} name="description" placeholder='Brief description of your product'></TextBoxComponent> */}
              <br /><br />
            </label>
            <label>Your Location:
              <input type="text" name="location" placeholder='Amherst, MA'></input>
              <br /><br />
            </label>
            <label>Selling Price:
              {/* <p>$</p>$ */} $
              <input type="text" name="price" placeholder='0'></input>
              <br /><br />
            </label>
            <Link to="/">
            <Button type="submit" size="md" value="Continue"></Button>
          </Link>
          </div>
          <div margin-right= "0">
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
    <Form content={content} width='95vw' textAlign= 'left' paddingLeft="20px" ></Form>
  )
}
