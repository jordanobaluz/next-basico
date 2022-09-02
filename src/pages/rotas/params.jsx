import { useRouter } from "next/dist/client/router"

export default function Params() {
    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas Params: {id} e {nome} </h1>
            <p>Ao passar os parametros na URL, como por exemplo [params?nome=Jordano&id=1] é possível acessar os parametros na pagina</p>
        </div>
    )
}