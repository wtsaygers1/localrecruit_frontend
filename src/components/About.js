import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-6">
                    <p className="text-sm-start">Sports Ball is a community of bonhomie with
                    a passion for the park, chilling, and the obscure sports of the world.
                    Connect into the local scene and match with others by ability or interest</p>
                    <p>We have one strict rule and that is good vibes only</p>
                    <p>Good natured competition is welcomed but a must have is a thriving,
                    inclusive community to rally around one another, have good times, and grow
                    the obscure sports world</p>
                </div>
                <div className="col-6">
                    <img src="about_1.jpeg" className="rounded float-end fluid" alt="party play" />
                </div>
            </div>
            <div className="row py-4">
                <div className="col-6">
                    <img src="about_2.jpeg" className="rounded float-start fluid" alt="people in park" />
                </div>
                <div className="col-6">
                    <p className="text-center">Who Should Play Sports Ball</p>
                    <p className="text-sm-start">Anyone can use the Sports Ball app!<br/>
                    We are a community open to all participants as long as you live our one rule.
                    Register, complete a profile, and connect into the community around you
                    while staying active and having some fun</p>
                </div>
            </div>
        </div>
    )
}
