import './Formulario.css'
import { useState } from 'react'

export default function Formulario(){
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLista([...lista, {texto: tarefa, status: 'pendente'}])
        setTarefa('')
    }

    const mudarStatus = (index, novoStatus) => {
        const novaLista = [...lista]
        novaLista[index].status = novoStatus
        setLista(novaLista)
    }

    const subirTarefa = (index) => {
        if(index > 0){
            const novaLista = [...lista]
            const temp = novaLista[index]
            novaLista[index] = novaLista[index-1]
            novaLista[index-1] = temp
            setLista(novaLista)
        }
    }

    const descerTarefa = (index) => {
        if(index < lista.length - 1){
            const novaLista = [...lista]
            const temp = novaLista[index]
            novaLista[index] = novaLista[index+1]
            novaLista[index+1] = temp
            setLista(novaLista)
        }
    }

    return(
        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        value={tarefa} 
                        onChange={(e) => setTarefa(e.target.value)} 
                    />
                </label>
                <input type="submit" value="Adicionar" />
            </form>

            <ul>
                {lista.map((item, index) =>
                    <li key={index} className={item.status}>
                        {item.texto}
                        <div>
                            <button onClick={() => mudarStatus(index, 'realizada')}>Realizada</button>
                            <button onClick={() => mudarStatus(index, 'pendente')}>Pendente</button>
                            <button onClick={() => mudarStatus(index, 'nao-realizada')}>Não Realizada</button>
                            <button onClick={() => subirTarefa(index)}>Subir</button>
                            <button onClick={() => descerTarefa(index)}>Descer</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}