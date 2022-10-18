var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys();

//isse public aur private keys milay gay
//console.log(vapidkeys);


//{
// publicKey: 'BEhM9Luq_Gw0mVGOZM3JvEo_8RmxoHAxKFJ7G_bppIv9-D8ZihkkEowx_kA3htj8pMTtf1Dex-m8rduT1m5YYr4',
// privateKey: 'iRf8Q4Wb7_NTiS296NXRVGSOe1fUq751yAFPpBEpldc'
//}

let vapidkeys = {
    publicKey: 'BEhM9Luq_Gw0mVGOZM3JvEo_8RmxoHAxKFJ7G_bppIv9-D8ZihkkEowx_kA3htj8pMTtf1Dex-m8rduT1m5YYr4',
    privateKey: 'iRf8Q4Wb7_NTiS296NXRVGSOe1fUq751yAFPpBEpldc'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {

}

push.sendNotification(sub, 'test message')