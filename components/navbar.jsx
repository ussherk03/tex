import React, { Component } from 'react';


// Stateless Functional Component - use 'sfc';

class NavBar extends Component {

    navBarLink = {
        fontWeight: 600, fontFamily: "Script MT, serif",
        color: 'white', border: '2px olivegreen transparent',
        padding: '5px', backgroundImage: "url('./img/beach.jpg')",
    }

    spanStyles = {
        marginLeft: '2em', 
        fontFamily: 'Lato, serif', 
        transition: '0.55s ease-in-out',
    }

    render() { 

        return (
            <nav className="navbar navbar-light nav">
                <a href="#" className="navbar-brand" style={this.navBarLink} onClick={() => this.props.onNavChange()}>
                    Navbar 
                </a> 
                <span className="badge badge-pill badge-secondary" style={{ backgroundColor: 'black', color: 'white'}, this.spanStyles}>
                    Init Counters: {this.props.totalCounters}
                </span>

                <span className="badge badge-pill badge-secondary" style={{ backgroundColor: 'orange', color: 'white'}, this.spanStyles}>
                    Total Increment: {this.props.bigSum}
                </span>
                
            </nav>
        );
    }
        
}
 
export default NavBar;