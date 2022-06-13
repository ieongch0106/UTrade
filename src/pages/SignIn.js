import React from 'react'
import Form from '../components/Form';
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
        <input type="text" name="name" placeholder='Enter username'></input>
        <br />
      </label>
      <label>Password:
        <br />
        <input type="text" name="password" placeholder='Enter password'></input>
        <br /><br />
      </label>
      <button type="submit">Sign in</button>
      <div>{link}</div>
    </>
  )

  return (
    <>
      <Form name="Sign in" content={content}></Form>
    </>
  )
}
