 const metodo = (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({ nome: "Jordano" })
    }else{
        res.status(200).json({ nome: "Nicoly" })
    }
}

export default metodo