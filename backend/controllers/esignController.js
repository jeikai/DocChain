const esignModel = require('../models/esignModel')

exports.excute = async(req, res) => {
    let {publicKey, privateKey} = esignModel.generateKeyPair()

    let {data} = req.body

    const {signature} = esignModel.sign({data, privateKey})

    const {verify} = esignModel.verify({data, publicKey, signature})

    res.json({verify, publicKey, signature})
}
