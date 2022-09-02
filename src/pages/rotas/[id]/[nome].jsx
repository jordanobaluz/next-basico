import { useRouter } from "next/router"

export default function Nome() {
    const router = useRouter();
    const codigo = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas/id/buscar</h1>
            <p>Ao colocar em chaves a pasta id, será transformado em rotas dinamicas os componentes dentro da pasta: [id]</p>
            <p>O useRouter irá permitir acessar o ID passado pela url e também acessar outro parametro dinamico da URL, como por exemplo nome</p>
            <h3>Rotas / {codigo} / {nome}</h3>
        </div>
    )
}