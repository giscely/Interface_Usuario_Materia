import React from 'react';
import Card from './Card';
import './Galeria.css'; 

const personagens = [
  { nome: 'Cícero', imagem: './cicero.png', descricao: 'O professor de física mais fofo e querido' },
  { nome: 'Daniel', imagem: './daniel.png', descricao: 'Trauma de muita gente! while is not' },
  { nome: 'Hugo', imagem: './hugo.png', descricao: 'Huguete, big querido' },
  { nome: 'Iuri', imagem: './iuri.png', descricao: 'Iuri Redes' },
  { nome: 'Maxmiller', imagem: './maxmiller.png', descricao: ' tem dois filhos' },
  { nome: 'Romerito', imagem: './romerito.png', descricao: 'Romero Brito, pai de Isabel' },
];

const Galeria = ({ onSelect }) => {
  return (
    <div className="galeria">
      {personagens.map((personagem) => (
        <Card
          key={personagem.nome}
          nome={personagem.nome}
          imagem={personagem.imagem}
          onClick={() => onSelect(personagem)}
        />
      ))}
    </div>
  );
};

export default Galeria;