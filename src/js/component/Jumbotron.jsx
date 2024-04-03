import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="position-relative p-5 text-black border border-dashed rounded-1 mt-5" style={{ background: '#E8E8E8'}}>
            <h1>{props.title}</h1>
            <p className="col-lg-12 mb-4">
                {props.description}
            </p>
            <button className="btn btn-primary px-5 mb-5" type="button">
                {props.buttonAction}
            </button>
        </div>
    
    );
};


export default Jumbotron;