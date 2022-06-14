import React from 'react'
import { Button, Form } from '../components/Components'
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
      <Button type="submit" size="md" value="Sign up"></Button>
      <div>{link}</div>
    </>
  )

  return (
    <>
      <Form name="Sign up" content={content} width='30vw'></Form>
    </>
  )
}