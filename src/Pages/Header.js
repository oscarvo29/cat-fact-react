import React, { Component } from 'react'
import { Navbar } from "./Navbar";


export class Header extends Component {
    render() {
        return <header>
               <h1>Cat Facts</h1>
               <Navbar />
            </header>
    }
}


