const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const brushSizeInput = document.getElementById('brush-size');
const brushColorInput = document.getElementById('brush-color');

canvas.width = 800;
canvas.height = 600;

let painting = false;
let brushSize = brushSizeInput.value;
let brushColor = brushColorInput.value;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

brushSizeInput.addEventListener('change', (e) => {
    brushSize = e.target.value;
});

brushColorInput.addEventListener('change', (e) => {
    brushColor = e.target.value;
});
const imageLoader = document.getElementById('image-loader');

imageLoader.addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Telegram Web App API
    Telegram.WebApp.ready();

    // Установка размеров для Web App в соответствии с доступным пространством
    canvas.width = Telegram.WebApp.viewportStableWidth;
    canvas.height = Telegram.WebApp.viewportStableHeight - 100; // Учитывая панель инструментов

    // Дополнительные настройки для Web App, например, изменение цвета заголовка
    Telegram.WebApp.MainButton.show();
    Telegram.WebApp.MainButton.setText("Save");

    // Обработчик для кнопки сохранения (основной кнопки Telegram)
    Telegram.WebApp.MainButton.onClick(() => {
        // Логика для сохранения изображения или закрытия Web App
        Telegram.WebApp.close();
    });
});

