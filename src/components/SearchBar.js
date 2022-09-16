import React from 'react';
import { Input } from '../styles/Input.style';
import { Button } from '../styles/Button.style';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({placeholder, width}) {
  return (
    <>
      <form className='d-inline-block' style={{width: width}}>
        <div className='d-flex justify-content-center'>
            <Input type="search" name="search" sty="search" bg="white" placeholder={placeholder} />
            <Button type="submit" bg="white" sty="search">
              <SearchIcon sx={{color: 'black'}} />
            </Button>
        </div>
      </form>
    </>
  )
}