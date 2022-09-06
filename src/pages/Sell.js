import React from 'react'
import { Input } from '../styles/Input.style'
import Select from 'react-select';

export default function Sell() {
  const options = [
    { value: 'app', label: 'appliance' },
    { value: 'e-products', label: 'electronics' }
  ]

  return (
    <div className='text-center'>
      <div>
        <Select
          className='mt-5'
          options={options}
          placeholder='Select a Category'
          isSearchable
          isClearable
        />
      </div>
      <form>
        Item for Sale
        {/* <Input sty="sell" placeholder='What are you selling' />
        <Input sty="sell" placeholder='Price' />
        <textarea placeholder='Describe your item (optional)'/> */}
      </form>
    </div>
  )
}
