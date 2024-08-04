document.getElementById('listFilter').addEventListener('change', function() {
    const selectedCategory = this.value;
    const items = document.querySelectorAll('#itemList .item');
    
    items.forEach(item => {
      if (selectedCategory === '' || item.getAttribute('data-category') === selectedCategory) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  });
  