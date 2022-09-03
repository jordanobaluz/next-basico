import { useEffect, useState } from "react"

export default function Questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])

    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
    }

    return (
        <div>
            <h1>Questao API</h1>
            <div>
                <p>{questao?.enuciado}</p>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}

//para trabalhar com chamada do backend, precisa definir o estado do componente para quando a chamada chegar atualizar o componente