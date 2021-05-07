import React from 'react';
import { useParams } from 'react-router-dom';


export default function SportPage(props) {
    const { name } = useParams()
    // console.log(name, props.sports);
    const sportObj = props.sports.find(sport => sport.url === name)
    // console.log(sportObj)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {!!sportObj ?
                        <>
                            <h3>{sportObj.name}</h3>
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </> : <h3>Sorry, {name} is not available at this time</h3>
                    }
                </div>
            </div>
        </div>
    )
}
