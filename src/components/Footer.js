import React from 'react';
import { Instagram, Twitter, Twitch, Youtube } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className="row">
            <div className="footer">
                <div className="card">
                    <div className="card-body social col-6">
                        <a href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="insta social">
                            <Instagram />
                        </a>
                        <a href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="twitter social">
                            <Twitter />
                        </a>
                        <a href="https://www.twitch.tv/"
                            target="_blank"
                            rel="noreferrer"
                            className="twitch social">
                            <Twitch />
                        </a>
                        <a href="https://www.youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube social">
                            <Youtube />
                        </a>
                    </div>
                    <div className="card-body contact col-6">
                        Contact:<br />
                        Chuck'n Dingers<br />
                        President of Sports<br />
                        710 Hall of Fame Blvd<br />
                    </div>
                </div>
            </div>
        </div>
    );
}
