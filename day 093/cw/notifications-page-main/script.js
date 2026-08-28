const markAllBtn = document.getElementById('mark-all');
const unreadNotifications = document.querySelectorAll('.notification.unread');
const countElement = document.getElementById('count');

markAllBtn.addEventListener('click', () => {
    unreadNotifications.forEach(notification => {
        notification.classList.remove('unread');
    });
    countElement.innerText = '0';
});

unreadNotifications.forEach(notification => {
    notification.addEventListener('click', () => {
        if (notification.classList.contains('unread')) {
            notification.classList.remove('unread');

            let currentCount = parseInt(countElement.innerText);
            if (currentCount > 0) {
                countElement.innerText = currentCount - 1;
            }
        }
    });
});

