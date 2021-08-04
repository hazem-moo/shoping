import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'
import { AboutData } from '../../Data/AboutData'
import './About.css'

export const About = () => {
    const aboutData = AboutData.map(({ src, header, text }) => {
        return (
            <div className='col-md-4' key={src}>
                <Card>
                    <CardImg src={ src } alt={ header } className='mx-auto' />
                    <CardBody>
                        <h4> { header } </h4>
                        <p> { text } </p>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <section className='about container text-center' id='About'>
            <h2 className="text-start red blue black green"> about us </h2>
            <div className='under-line red blue black green'></div>
            <h5 > 
                We are a digital agency focused on delivering content and utility user-experiences.
            </h5>
            <p>
                Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.
            </p>
            <div className='row'>
                { aboutData }
            </div>
        </section>
    )
}
