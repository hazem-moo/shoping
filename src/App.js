import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeComponent } from './Compomemt/Home/HomeComponent'
import  MyNav  from './Compomemt/MyNav/MyNav'
import { Themes } from './Compomemt/Thems/Themes'

function App() {
  useEffect(() => {
    document.title = 'shoping'
  })
  return (
      <BrowserRouter basename='/shoping'>
        <MyNav />
        <Switch>
        <Route path="/" exact component={ HomeComponent } />
        </Switch>
        <Themes />
      </BrowserRouter>
  )
}

export default App
