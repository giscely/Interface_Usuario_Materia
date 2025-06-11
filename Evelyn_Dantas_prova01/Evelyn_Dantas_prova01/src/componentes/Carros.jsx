import { carros } from "./dados_carros";
import './Carros.css'
{/*eu importei as informações de dados_carros e usei no map para pegar o modelo e o ano, como o map funciona tipo um for de python, eu mudei o que seria o 'i' para 'car', peguei o parametro que foi pedido, no caso modelo e ano e pedi para busca eles na lista dos carros */}
export default function Carros(){
    return(
        <>
            {carros.map((car) => (
                <div className="div1">
                    <p>{car.modelo}</p>
                    <p>{car.ano}</p>
                   
                </div> 
            ))}
            
        </>
    )
}
