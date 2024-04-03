import React from 'react';


// Definición del componente Card
const Card = (props) => {
  return (
    <div className="card mt-4 col-md-3 me-1" style={{ width: '20rem' }}>
        <img src={props.image} className="card-img-top img-cover" alt="..."  />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
    </div>
  );
}

// Exportar el componente Card para su uso
export default Card;