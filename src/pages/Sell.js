import React from 'react'
import { Button, Form } from '../components/Components'

export default function Sell() {
    const content = (
        <>
          <label>Name of product:
            <input type="text" name="product" placeholder='Enter username'></input>
            <br />
          </label>
          <label>Condition:
            <input type="text" name="password" placeholder='e.g. Good, bad'></input>
            <br /><br />
          </label>
          <Button type="submit" size="md" value="Continue"></Button>
        </>
      )

  return (
    <Form content={content} width='95vw'></Form>
  )
}
