const imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

function handleImage(e) {
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
}

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener
