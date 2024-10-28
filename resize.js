document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const resizeButton = document.getElementById('resize');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');

    let image = new Image();

    // Handle image file input
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                image.src = e.target.result;
                image.onload = function() {
                    // Show the canvas only after the image is loaded and resize is triggered
                    canvas.style.display = 'block';
                };
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle resize and save button click
    resizeButton.addEventListener('click', () => {
        const width = parseInt(widthInput.value);
        const height = parseInt(heightInput.value);

        if (!isNaN(width) && !isNaN(height)) {
            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Fill the canvas background with black
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw the image resized
            ctx.drawImage(image, 0, 0, width, height);

            // Save the resized image as JPEG
            const resizedImage = canvas.toDataURL('image/jpeg');
            const link = document.createElement('a');
            link.href = resizedImage;
            link.download = 'resized-image.jpg';
            link.click();
        } else {
            alert('Please enter valid dimensions.');
        }
    });
});
