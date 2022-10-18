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

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dsQ_9JXa0-w:APA91bHvXrhqyqa47kX4uboXsasDYo66Z8qtNvLYLdH_t5brk25cVqm7oav3JgGNzPEjAdKypujSyiArLb94A6dqN7QdFBV2q8PrHm5emOfKZr4Sa1zK5ixDcgOzeDuxlPbrt72XREot", "expirationTime": null, "keys": { "p256dh": "BOTX988qScsZ5gF43SpM6GDR0SufRUm1ZQcWSqrdZ37sp6YxJ_R14QaYQXEYITk-WaJ8ycLl9l2AW8gUXFTzFkY", "auth": "lYu5Rk0RztzwfBzcEDq25A" } }
push.sendNotification(sub, 'test message')