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
                            <h3 className="header">{sportObj.name}</h3>
                            <div className="card">
                                <img src={sportObj.image_url} className="card-img-top" alt={sportObj.name} />
                                <div className="card-body">
                                    <p className="card-text subtext">{sportObj.description}</p>
                                </div>
                            </div>
                        </> : <h3 className="header">Sorry, {name} is not available at this time</h3>
                    }
                </div>
            </div>
        </div>
    )
}
