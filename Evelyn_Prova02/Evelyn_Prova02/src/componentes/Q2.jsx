import { useEffect, useState } from "react";
import './Q2.css';
// lembrando que no site da prova pede /users mas não da certo com ele, aí usei /todos
export default function Questao2(){
    const [dados,setDados] = useState([])
    const [numero,setNumero] = useState()
    const [status,setStatus] = useState(false)
    const novosDados = dados.filter((user) => user.userId === Number(numero))

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error("Erro ao buscar Users:", error);
            }
        }
        fetchUsers();
        console.log('recarregou')
    },[status])

    const handleChange = (e) =>{
        setNumero(e.target.value)
    }

    return(
        <>
            <form>
                <input type="number" max={10} min={1} name="numero" value={numero} onChange={handleChange} placeholder="Numero de 1 a 10"/>
                <button onClick={() => setStatus(status === false ? true:false)}>Recarregar</button>
            </form>

            {novosDados.map((item) => (
                <p key={item.id}>
                    {item.userId} | {item.title} | {item.completed}
                </p>
            ))}

        
        </>
    )
}
