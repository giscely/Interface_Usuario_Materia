
import { carros } from "./dados_carros";
import './Carros.css'
{/*Aqui eu filtrei o ano da lista de carros e coloquei a condição de ser maior que 2019, a variavel anuidade guarda esse valor até eu pedir para o map selecionar os modelos que tenham o que foi pedido */}
export default function Anuidade(){
    const anuidade = carros.filter((anuidade) => anuidade.ano > 2019)
    return(
        <>
            <div>

                <h1>carros 2019:</h1>
                {anuidade.map((item) => (
                    <p>{item.modelo}</p>
                ))}
            </div>
        </>
    )
}