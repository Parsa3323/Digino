// script.js
document.addEventListener('DOMContentLoaded', () => {
    const notifyButton = document.getElementById('notify-button');

    notifyButton.addEventListener('click', () => {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                // Create a new notification
                const notification = new Notification('Hello!', {
                    body: 'This is a sample notification.',
                    icon: 'icon.png', // Replace with your actual icon path
                });

                // Optional: Handle notification click
                notification.onclick = () => {
                    console.log('Notification clicked!');
                };
            } else if (Notification.permission !== 'denied') {
                // Request permission if not already granted
                Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                        // Permission granted; create notification
                        const notification = new Notification('Hello!', {
                            body: 'This is a sample notification.',
                            icon: 'icon.png', // Replace with your actual icon path
                        });
                    }
                });
            }
        } else {
            console.error('Notifications not supported in this browser.');
        }
    });
});
