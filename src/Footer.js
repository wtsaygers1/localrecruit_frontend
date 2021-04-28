import React from 'react'
import { Instagram, Twitter, Twitch, Youtube } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className="row">
            <div className="footer">
                <div className="card">
                    <div className="card-body social col-6">
                        <Instagram />
                        <Twitter />
                        <Twitch />
                        <Youtube />
                    </div>
                    <div className="card-body contact col-6">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}
