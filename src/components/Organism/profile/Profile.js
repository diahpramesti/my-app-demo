import React, { Component } from 'react';
import Button from '../../Atom/Button/Button';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="https://ik.imagekit.io/9tx59i8qwh/Photos/download_lZrGFCPT1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662302775032" alt="hacktiv8" />                     
                    </div>
                    <div className="col-10">
                        <h3>Hactiv8 Meetup</h3>
                            <p>Location&emsp;&nbsp;&nbsp;&nbsp;Jakarta, Indonesia</p>
                            <p>Members&emsp;&nbsp;1,078</p>
                            <p>Organizers&nbsp;&nbsp;&nbsp;Adhy Wiranata</p>
                            <Button
                            title="Join Us"
                            textColor={'pink'}
                            customStyle={{
                                borderColor: 'grey',
                                backgroundColor: 'black'
                            }}   
                            />                    
                    </div>
                </div>

            </div>
            
        )
    }
}

export default Profile;