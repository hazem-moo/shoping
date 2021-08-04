import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'
import { dataPart1 } from '../../Data/DataPart1'
import './Home.css'

export const Part1 = () => {

    const part1 = dataPart1.map(({ src, text, header }) => {
        return (
            <div className='items m-0' key={src}>
                <Card>
                    <CardBody>
                        <h6> {header} </h6>
                        <p> {text} </p>
                    </CardBody>
                        <CardImg src={src} alt={header} className='w-100 item-img' />
                </Card>
            </div>
        )
    })

    return (
        <section className='products'>
            {part1}
        </section>
    )
}
