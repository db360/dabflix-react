import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://i.imgur.com/pChHk8F.jpg')`,
            backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner_title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button classname="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    This is a test description
                </h1>
            </div>
        </header>
    )
}

export default Banner
