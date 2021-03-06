import React from 'react'
import { Button, Form } from '../components/Components'
import { Link } from 'react-router-dom'

export default function Settings() {
    const content = (
        <>
          <label>Username:
            <br />
            <input type="text" name="name" defaultValue="Gronky" />
            <br />
          </label>
          <Button type="submit" size="md" value="Save Profile" />
          <br /><br />
          <Link to='/'>Change Password</Link>
          <br />
          <h2>Items that you are selling right now:</h2>
          <Link to='/'>iClicker</Link><br />
          <Link to='/'>Used backpack</Link><br />
          <Link to='/'>Calculus textbook 5th edition</Link><br />
        </>
      )

  return (
    <Form content={content} width='50vw' textAlign= 'center'></Form>
  )
}
