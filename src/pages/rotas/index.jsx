import Link from 'next/link'

export default function rotas() {
    return (
        <div>
            <h1>Rotas Index</h1>
            <p>O arquivo index é acessado por padrão, quando colocado somente o nome da pasta na URL</p>
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
        </div >
    )
}


//quando criado o arquivo index, ao chamar a rota http://.../rotas não precisa especificar o index na url