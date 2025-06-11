import { use, useState } from "react"

export default function Contador(){

    const [count, setCount] = useState(0)

    return (
            <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)} style={{width:count > 10 ? '550px':''}}> {/*eu utilizei essa estruta para mudar a largura pq achei mais prático, fiz a estrutura de condição e se for atendida altera a largura, a parte do contador eu reutilizei o que já vem por padrão e usei */}
                    +
                </button>
                <p>
                    {count}
                </p>
                <button onClick={() => setCount((count) => count - 1)} style={{height:count < 0 ? '7px':''}}> {/* Só dei CRTL-c e CRTL - z na anterior, mas mudei a altura, ficou uma forma meio estranha mas dá para utilizar, falando da estrutura de condição, só alterei o sinal de maior que.*/}
                    -
                </button>
            </div>
           
            </>
        )
 };



