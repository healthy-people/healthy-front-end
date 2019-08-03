import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue-grey">
                    <a href="#!" className="brand-logo center">Logo</a>
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="...">Account Settings</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Account Settings</a></li>
                
            </ul>
        </div>
    );
}

export default Navbar;