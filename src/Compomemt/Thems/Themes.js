import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import './Themes.css'

export const Themes = () => {
    const [ theme, setTheme ] = useState(false)
    const [ show, setShow ] = useState(false)

    const redRef = useRef() 
    const blueRef = useRef() 
    const greenRef = useRef() 
    const blackRef = useRef() 
    const popupRef = useRef()
    
    const root = document.getElementById("root")

    const toggleTheme = _ => setTheme( !theme )
    const toggleShow = _ => setShow( !show )
    useEffect(() => {
        document.addEventListener('keydown', e => {
            if ( e.keyCode === 27 ) {
                setShow(false)
            }
        })
    })
    
    const defaultTheme = () => root.setAttribute('data-theme', redRef.current.className )

    const black = () => root.setAttribute('data-theme', blackRef.current.className )
    
    const blue = () => root.setAttribute('data-theme', blueRef.current.className )
    
    const green = () => root.setAttribute('data-theme', greenRef.current.className )

    return (
        <>
        <section className='theme ' onClick={toggleTheme}>
            <i className="fas fa-fan red black blue green fa-2x fa-spin theme"></i>
        </section>
        <div className={`container-theme ${theme ? 'd-block' : 'd-none'}`} >
            <ul>
                <li className='red' ref={ redRef } onClick={ defaultTheme } />
                <li className='black' ref={ blackRef } onClick={ black } />
                <li className='green' ref={ greenRef } onClick={ green } />
                <li className='blue' ref={ blueRef } onClick={ blue } />
            </ul>
        </div>

        <section className='popup '>
            <div className='icon red black blue green' onClick={ toggleShow } >
                <i class="fas fa-info fa-2x"></i>
            </div>
            <div className={`${show ? 'd-block' : "d-none"} show-popup`} ref={ popupRef } >
                <h4 className='red green blue black header mb-4'> What is Lorem Ipsum </h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                </p>
                <Button onClick={ toggleShow }> close </Button>
            </div>
        </section>
        </>
    )
}
