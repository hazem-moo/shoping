import React from 'react'
import { Button } from 'reactstrap'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='container' id='Contact'>
            <h2 className='red blue black green'> contant us </h2>
            <div className='under-line red blue black green'></div>
            <form className='form '>
                <input type='text' required='required' placeholder='write your adress' />
                <input type='text' required='required' placeholder='write your full name' />
                <input type='email' required='required' placeholder='write your mail ' />
                <textarea  />
                </form>
                <Button color='danger' className='d-block mx-auto w-50'> send </Button>
        </div>
    )
}
