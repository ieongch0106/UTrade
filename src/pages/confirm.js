import React, { useState } from 'react'
import { Button, Form } from '../components/Components'
import { useForm } from "react-hook-form";
import './Sell.js'
import './confirm.css'

export default function Sell(props) {
  const { register, handleRegister } = useForm();

  function getData() {
    let data = sessionStorage.getItem("mySessionStorage")
    data = JSON.parse(data)
    // console.log(data)
  }

  const content = (
    <>
    <div className="main_div">
        <div className="left">
        <p>images</p>
        </div>
    <div className="middle">
        <p>Product</p>
        {/* content.product */}
        <p>Seller Name</p>
        <p>Price</p>
        {/* content.price */}
        <p>Location</p>
        {/* content.location */}
    </div>
    <div className="right">

    </div>
    </div>
    <Button onClick={() => this.getData()} type="submit" size="md" value="Finish"/>
    </>
    )

  return (
    <Form content={content} encType="multipart/form-data" width='95vw' textAlign= 'left' paddingLeft="20px" />
  )
}

