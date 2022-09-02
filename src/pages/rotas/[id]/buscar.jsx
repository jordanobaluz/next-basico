import { useRouter } from "next/router"
import Link from 'next/link'

export default function Buscar() {
    const router = useRouter();
    const codigo = router.query.id

    return (
        <div>
            <h1>Rotas/id/buscar</h1>
            <p>Ao colocar em chaves a pasta id, será transformado em rotas dinamicas os componentes dentro da pasta: [id]</p>
            <p>O useRouter irá permitir acessar o ID passado pela url</p>
            <h3>Rotas / {codigo} / Buscar</h3>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}