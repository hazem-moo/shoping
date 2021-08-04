import React from 'react'
import { About } from '../../Pages/About us/About'
import { Contact } from '../../Pages/Contant/Contact'
import { Footer } from '../../Pages/Footer/Footer'
import { Home } from '../../Pages/Home/Home'
import { Part1 } from '../../Pages/Home/Part1'
import { Shop } from '../../Pages/Shop/Shop'

export const HomeComponent = () => {
    return (
        <>
            <Home />
            <Part1 />
            <Shop />
            <About />    
            <Contact />
            <Footer />
        </>
    )
}
