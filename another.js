addEventListener('load', async() => {
    let service_worker = await navigator.serviceWorker.register('./sw.js')
    console.log(sw)
})

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BEhM9Luq_Gw0mVGOZM3JvEo_8RmxoHAxKFJ7G_bppIv9-D8ZihkkEowx_kA3htj8pMTtf1Dex-m8rduT1m5YYr4'
    })
    console.log(JSON.stringify(push))
}