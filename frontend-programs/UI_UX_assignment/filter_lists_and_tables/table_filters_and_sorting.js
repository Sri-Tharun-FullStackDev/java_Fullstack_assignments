document.getElementById('tableFilter').addEventListener('change', function() {
    const selectedCategory = this.value;
    const rows = document.querySelectorAll('#itemTable tbody tr');
    
    rows.forEach(row => {
      if (selectedCategory === '' || row.getAttribute('data-category') === selectedCategory) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
  
  let isAscending = true;
  
  document.getElementById('sortButton').addEventListener('click', function() {
    const rowsArray = Array.from(document.querySelectorAll('#itemTable tbody tr'));
    rowsArray.sort((a, b) => {
      const textA = a.children[1].textContent;
      const textB = b.children[1].textContent;
  
      if (textA < textB) return isAscending ? -1 : 1;
      if (textA > textB) return isAscending ? 1 : -1;
      return 0;
    });
  
    const tbody = document.querySelector('#itemTable tbody');
    tbody.innerHTML = '';
    rowsArray.forEach(row => tbody.appendChild(row));
  
    isAscending = !isAscending;
  });
  