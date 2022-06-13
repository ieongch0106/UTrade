import React from 'react'
import Form from '../components/Form';
import { Link } from "react-router-dom";

export default function SignIn() {
  const link = (
    <>
      <h2>Already a member?</h2>
      <Link to='/login'>Sign in</Link>
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
      <br />
      </label>
      <label>Re-type password:
        <br />
        <input type="text" name="confirmpw" placeholder='Confirm password'></input>
        <br /><br />
      </label>
      <button type="submit">Sign up</button>
      <div>{link}</div>
    </>
  )

  return (
    <>
      <Form name="Sign up" content={content}></Form>
    </>
  )
}