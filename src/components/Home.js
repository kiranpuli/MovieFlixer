import React, { Component } from 'react'
import "./Home.css"

import Nav from "./Nav.js"
import Banner from "./Banner.js"

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Banner />
                {/* Rows */}
            </div>
        )
    }
}

export default Home
