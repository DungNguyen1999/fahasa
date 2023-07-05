// SHOW IMG

function showImage(src) {
   const fullscreenImage = document.getElementById('fullscreen-image');
   const fullscreenImageSrc = document.getElementById('fullscreen-image-src');

   fullscreenImageSrc.src = src;
   fullscreenImage.classList.add('show');
}

function closeFullscreenImage() {
   const fullscreenImage = document.getElementById('fullscreen-image');

   fullscreenImage.classList.remove('show');
}

// QUANTITY PRICE

let minusButton = document.querySelector('.minus-btn');
let plusButton = document.querySelector('.plus-btn');
let quantityInput = document.querySelector("input[name='quantity']");

minusButton.addEventListener('click', function () {
   const currentValue = parseInt(quantityInput.value);
   if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
   }
});

plusButton.addEventListener('click', function () {
   const currentValue = parseInt(quantityInput.value);
   quantityInput.value = currentValue + 1;
});
