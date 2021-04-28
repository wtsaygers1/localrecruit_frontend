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
                            className="insta social">
                            <Instagram />
                        </a>
                        <a href="https://twitter.com/"
                            target="_blank"
                            className="twitter social">
                            <Twitter />
                        </a>
                        <a href="https://www.twitch.tv/"
                            target="_blank"
                            className="twitch social">
                            <Twitch />
                        </a>
                        <a href="https://www.youtube.com"
                            target="_blank"
                            className="youtube social">
                            <Youtube />
                        </a>
                    </div>
                    <div className="card-body contact col-6">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}
