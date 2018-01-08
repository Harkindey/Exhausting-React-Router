import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    MemoryRouter,
    StaticRouter,
    NativeRouter, //this is for the react-native environment.
    Route,
    Link
} from 'react-router-dom';

import './App.css'

const LinksRoutes = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
    </div>
)
const forceRefresh = () => {
    console.log(new Date())
    return true
}

const BrowserRouterApp = () => {
    return (
        <BrowserRouter forceRefresh={forceRefresh()}>
            <LinksRoutes />
        </BrowserRouter>
    )
}

const HashRouterApp = () => {
    return (
        /* noslash , slash, hashbang  */
        <HashRouter hashType="hashbang"> 
            <LinksRoutes />
        </HashRouter>
    )
}

const MemoryRouterApp = () => {
    // memory routes, doesn't display route URL
    return (
        <MemoryRouter 
            initialEntries={['/', '/about']}
            intialIndex={1}
        >
            <LinksRoutes />
        </MemoryRouter>
    )
}

const StaticRouterApp = () => {
    // meant for server side rendring so changing wont do anything atall 
    return (
        <StaticRouter location="/about" context={{}}>
            <LinksRoutes />
        </StaticRouter>
    )
}

export default StaticRouterApp;