import React from 'react';
import './Card.css';

const Card = ({ nome, imagem, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagem} alt={nome} className="card-image" />
      <h3 className="card-title">{nome}</h3>
    </div>
  );
};

export default Card;