import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
    return (
        <section className='footer container'>
            <h2 className="text-start red blue black green"> footer </h2>
            <div className='under-line red blue black green'></div>
            <div>
                <Link to=''> <i className='fab fa-facebook red blue black green'></i> </Link>    
                <Link to=''> <i className='fab fa-twitter red blue black green'></i> </Link>    
                <Link to=''> <i className='fab fa-youtube red blue black green'></i> </Link>    
                <Link to=''> <i className='fab fa-instagram red blue black green'></i> </Link>
            </div>
        </section>
    )
}
