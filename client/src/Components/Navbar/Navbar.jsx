import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className="topnav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src="https://bit.ly/2mp1kBU" width="60" height="60" alt=""/> Cake&amp;Bake
                    </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link active" href="/product">Our Goods</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>  
                    </div>    
        )
    }
}
export default Navbar;
