// service-worker.js
self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),
        icon: 'icon.png', // Replace with your actual icon path
        badge: 'badge.png' // Replace with your actual badge path
    };

    event.waitUntil(
        self.registration.showNotification('New Notification', options)
    );
});
