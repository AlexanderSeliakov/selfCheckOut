import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import './ContentSection.css'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

function ContentSection() {
    return (
        <main className='MainMenu'>
            <Switch>
                <Route path={['/burgers']} component={Menu} />

                <Route path='/drinks' component={Menu} />

                <Route path='/snacks' component={Menu} />

                <Route path='/cart' component={Cart} />

                <Redirect to='/burgers' />
            </Switch>
        </main>
    )
}

export default ContentSection
