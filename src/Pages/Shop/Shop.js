import React, { useRef } from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'
import { dataShop } from '../../Data/dataShop'
import './Shop.css'

export const Shop = () => {

    const barsRef = useRef()
    const thRef = useRef()
    const chandedRef = useRef([])

    const thList = _ => {
        chandedRef.current.forEach(el => el.className = 'col-md-4' )
        thRef.current.classList.add('active')
        barsRef.current.classList.remove('active')
    }

    let barsList = (el ) => {
        chandedRef.current.forEach(el => el.className = "list-item" )
        if (thRef.current.classList.contains('active')) {
            thRef.current.classList.remove('active')
            barsRef.current.className += ' active'
        }
    }


    // let gpToRef = el => el
    const shop = dataShop.map(({ src, head, price }, idx) => {
        return (
            <div className='col-md-4 ' key={idx} ref={ el => chandedRef.current[idx] = el } >
                <Card >
                <CardImg src={src} alt={head} />
                <CardBody className='my-auto'>
                    <h6> {head} </h6>
                    <p> {price}$ </p>
                </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <section className='products-shop container' id='Shop'>
            <h2 className='red blue black green'> shoping </h2>
            <div className='under-line red blue black green'></div>
        <i class='fas fa-th active red blue black green' onClick={ thList } ref={ thRef } ></i>
        <i className='fas fa-bars red blue black green' onClick={el => barsList(el) } ref={ barsRef  } ></i>
            <div className='row'>
                {shop}
            </div>
        </section>
    )
}
