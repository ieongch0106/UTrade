import React from 'react'
import { Button, Form } from '../components/Components'
import { Link } from "react-router-dom";

export default function SignIn() {
  const link = (
    <>
      <h2>Don't have an account?</h2>
      <Link to='/register'>create an account</Link>
    </>
  );
  
  const content = (
    <>
      <label>Username:
        <br />
        <input type="text" name="name" placeholder='Enter username' />
        <br />
      </label>
      <label>Password:
        <br />
        <input type="text" name="password" placeholder='Enter password' />
        <br /><br />
      </label>
      <Button type="submit" size="md" value="Sign in" />
      <div>{link}</div>
    </>
  )

  return (
      <Form name="Sign in" content={content} width='30vw' textAlign= 'center' />
  )
}
