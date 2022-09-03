//next detecta por essa função que é uma renderização estatica
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props) {
    return (
        <div>
            <h1>Componente de renderização estatico</h1>
            <span>Aleatório: {props.numero}</span>
        </div>
    )
}

//quando é feito o build da aplicação e colocado em produção, o  numero se tornara estatico, pois está sendo gerado uma pagina estatica