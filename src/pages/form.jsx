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

    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const estiloDivInput = {
        display: "flex",
        width: "25rem",
        justifyContent: "space-around",
        paddingBottom: "0.5rem"
    }
    const estiloInput = {
        width: "60%"
    }
    return (
        <div style={estilo}>
            <h1>Integrando com API #02</h1>
            <p>Após preencher os campos e clicar para enviar, será enviado ao backend as informações</p>
            <div style={estiloDivInput}>
                <span>Digite seu nome: </span>
                <input type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder={"Nome"}
                    style={estiloInput} />
            </div>
            <div style={estiloDivInput}>
                <span>Digite sua idade:</span>
                <input type="number"
                    value={idade}
                    onChange={e => setIdade(+e.target.value)}
                    style={estiloInput} />
            </div>
            <button onClick={salvarUsuario}>Enviar</button>

            <p>E será exibido aqui as informações retornadas do backend</p>
            <ul>
                {renderizarUsuario()}
            </ul>
        </div>
    )
}