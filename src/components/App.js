import React, { Component } from 'react';

import Header from './Header';
import UserProfile from './UserProfile';

class App extends Component{
    constructor(props) {
        super();

        this.state = {
            profiles: [
                { id: 1, followers: "4 536", following: "532", name: 'Ux Navy Profile', avatar: "./static/avatar1.png" },
                { id: 2, followers: "0", following: "0", name: "Peter Griffin", avatar: "./static/colors.jpeg" },
                { id: 3, followers: "4 228", following: "532", name: "Stan Smith", avatar: "./static/basket.jpeg" },
            ]
        };
    }

    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    { this.state.profiles.map( profile => <UserProfile key={profile.id}  {...profile} />) }
                </div>
            </>
        );
    }
};

export default App;
