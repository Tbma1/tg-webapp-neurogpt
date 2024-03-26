document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, загружено ли WebApp API
    if (window.Telegram.WebApp) {
        // Инициализация WebApp
        Telegram.WebApp.ready();
    }

    document.getElementById('uploadLabel').addEventListener('click', function() {
        // Запрос изображения через Telegram WebApp
        Telegram.WebApp.openAttachmentMenu('image');
    });

    // Обработка полученного изображения
    Telegram.WebApp.onEvent('attachmentMenuClosed', function(event) {
        const photo = event.photo; // Получаем фото
        if (photo) {
            // Преобразуем полученное изображение для отображения на canvas
            const img = new Image();
            img.onload = function() {
                const canvas = document.getElementById('imageCanvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = photo.fileUrl; // Устанавливаем URL изображения
        }
    });
});
