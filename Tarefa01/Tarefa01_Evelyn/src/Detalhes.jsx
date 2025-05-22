import React from 'react';
import './Detalhes.css'; 

const Detalhes = ({ personagem }) => {
  if (!personagem) return null;

  return (
    <div className="detalhes">
      <h2>{personagem.nome}</h2>
      <img src={personagem.imagem} alt={personagem.nome} className="detail-image" />
      <p>{personagem.descricao}</p>
    </div>
  );
};

export default Detalhes;