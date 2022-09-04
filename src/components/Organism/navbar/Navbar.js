import React, { Component } from 'react';
import {Bar} from '../../Atom/Bar/Bar';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <h1 className='logo'>
                    QTEMU
                </h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Bar
                        title="Create Meetup"
                        textColor={'pink'}
                        customStyle={{
                            marginLeft: 30

                          }}
                        />
                        <Bar
                            title="Explore"
                            textColor={'pink'}
                            customStyle={{
                                marginLeft: 30
                              }}
                        />
                        <Bar
                            title="Login"
                            textColor={'pink'}
                            customStyle={{
                                marginLeft: 1060
                              }}
                        />
                    </div>
                </div>                
            </nav>
        )
    }
}

export default Navbar;