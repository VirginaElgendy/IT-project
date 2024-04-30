var alertSound = new Audio('./images/level-up-2-199574.mp3');

function playAlertSound() {
  alertSound.play();
}

document.getElementById('crime-books').addEventListener('click', function() {
  alert('Crime Books options');
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('crime-books').addEventListener('click', function() {
      var dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
      } else {
          dropdownContent.style.display = 'block';
      }
      playAlertSound();
  });
});

function addItemToCart() {
  alert('Item added to cart!');
  playAlertSound();
}

