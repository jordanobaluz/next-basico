import { useState } from "react"

export default function Form() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    //precisa passar param no request a API, passando metodo e body da requisição
    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        //faz a limpeza do formulario
        setNome("")
        setIdade(0)

        //depois armazena a resposta em resp e preenche os dados em usuarios
        const resp = await fetch('/api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }

    function renderizarUsuario() {
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>
            <p>Após preencher os campos e clicar para enviar, será enviado ao backend as informações</p>
            <input type="text"
                value={nome}
                onChange={e => setNome(e.target.value)} />
            <input type="number"
                value={idade}
                onChange={e => setIdade(+e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>

            <p>E será exibido aqui as informações retornadas do backend</p>
            <ul>
                {renderizarUsuario()}
            </ul>
        </div>
    )
}