// self.addEventListener('push', () => {
//     self.registration.sendNotification('test message', {})
// })

self.addEventListener('push', function(e) {
    var options = {
        body: "This Notification was generated from a push",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
                action: 'explore',
                title: 'explore this new world',
            },
            { action: 'close', title: 'close' }
        ]
    };
    e.waitUntil(self.registration.showNotification('Hello world', options))
})