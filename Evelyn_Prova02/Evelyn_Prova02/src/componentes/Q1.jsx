import { useEffect, useState } from "react";
import './Q1.css'

export default function Questao1(){
    const colors = ['blue','plum','red','orange']
    const [text, setText] = useState('')

    useEffect(() =>{
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (text === 'AlunoPIU'){
            document.body.style.backgroundColor = randomColor
        }else{
            document.body.style.backgroundColor = 'white'
        }
    },[text])

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    return(
        <>
            <form>
                <input type="text" name="text" placeholder="Digite a palavra-chave:" value={text} onChange={handleChange}/>
                <input type="text" name="text" placeholder="Digite o login:"/>

            </form>
        </>
    )
}
