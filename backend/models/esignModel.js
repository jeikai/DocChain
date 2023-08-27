const crypto = require('crypto')

exports.generateKeyPair = () => {
    const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
        modulusLength: 700, 
        publicKeyEncoding: {
            type: 'spki',
            format: 'der'
        }, 
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'der'
        }
    })

    return {
        publicKey: publicKey.toString('base64'), 
        privateKey: privateKey.toString('base64')
    }
}

exports.sign = ({data, privateKey}) => {
    privateKey = crypto.createPrivateKey({
        key: Buffer.from(privateKey, 'base64'),
        type: 'pkcs8',
        format: 'der'
    })
    const sign = crypto.createSign('SHA256')
    sign.update(data)
    sign.end()

    const signature = sign.sign(privateKey).toString('base64')

    return {
        data: data,
        signature: signature
    }
}

exports.verify =  ({data, publicKey, signature}) => {

    publicKey = crypto.createPublicKey({
        key: Buffer.from(publicKey, 'base64'),
        type: 'spki',
        format: 'der'
    })

    const verify = crypto.createVerify('SHA256')
    verify.update(data)
    verify.end()

    let result = verify.verify(publicKey, Buffer.from(signature, 'base64'))
    
    return {verify: result}
}