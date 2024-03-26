const imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

function handleImage(e){
    const reader = new FileReader();
    reader.onload = function(event){
        const img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.classList.remove('hidden'); // Показываем canvas
            scrollToTopButton.classList.remove('hidden'); // Показываем кнопку "Наверх"
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', (e) => {
    if (isDrawing === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.closePath();
        isDrawing = false
