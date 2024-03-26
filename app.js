document.addEventListener('DOMContentLoaded', function() {
    const imageLoader = document.getElementById('imageLoader');
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    imageLoader.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Получаем файл из input
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image(); // Создаем новый объект изображения
            img.onload = function() {
                // Устанавливаем размер canvas равным размеру изображения
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0); // Отрисовываем изображение на canvas
            };
            img.src = e.target.result; // Устанавливаем источник изображения как результат чтения файла
        };

        reader.readAsDataURL(file); // Читаем файл как Data URL
    });
});
