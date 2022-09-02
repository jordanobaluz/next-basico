import Link from 'next/link'
import router, { useRouter } from 'next/router'

export default function rotas() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
    //const router = useRouter()

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 2,
                nome: 'Nicoly'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <p>O arquivo index é acessado por padrão, quando colocado somente o nome da pasta na URL</p>
            <h3>Navegação utilizando Link</h3>
            <ul>
                <Link href="/rotas/params?id=2&nome=Nicoly">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Jordano">
                    <li>Jordano</li>
                </Link>
            </ul>
            <div style={estilo}>
                <h3>Navegação utilizando Router</h3>
                <p>Demonstração de navegação de forma programatica</p>
                <button onClick={() => navegacaoComParams()}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123/Jordano")}>Jordano</button>
            </div>
        </div >
    )
}


//quando criado o arquivo index, ao chamar a rota http://.../rotas não precisa especificar o index na url