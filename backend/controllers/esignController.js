const esignModel = require('../models/esignModel')

exports.excute = async(req, res) => {
    let {publicKey, privateKey} = esignModel.generateKeyPair()

    let {data} = req.body

    const {signature} = esignModel.sign({data, privateKey})

    const {verify} = esignModel.verify({data, publicKey, signature})

    res.json({verify, publicKey, signature})
}

exports.view = async(req, res) => {
    debugger
    let {data, publicKey, signature} = req.body
    console.log(publicKey.length);
    if(publicKey.length === 156){

        const {verify} = esignModel.verify({data, publicKey, signature})
    
        res.json(verify)

        return
    }
    res.json(false)
}
