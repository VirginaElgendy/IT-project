const ratings = document.querySelectorAll('.rating input');
ratings.forEach(rating => {
  rating.addEventListener('change', () => {
    
    ratings.forEach(r => r.checked = false);
    
    rating.checked = true;
  });
});

function addItemToCart() {
  alert('Item added to cart!');
}
