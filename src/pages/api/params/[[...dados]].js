export default function params(req, res){
    res.status(200).json({
        params: req.query
    })
}

//api dinamica que recebe multiplos parametros e retorna um array com os parametros enviados na URL
//exemplo de URL com parametros: http://localhost:3000/api/params/123/Maria/RuaFranklinVeras
//duplo [] transforma os parametros em algo opcional
//[...dados] irá permitir a passagem de multiplos parametros
//[[...dados]] irá permitir a passagem de multiplos parametros de forma opcional