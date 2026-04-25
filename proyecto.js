document.addEventListener('DOMContentLoaded', () => {
    
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            alert(` (No encontrado)`);
        } else {
        
            searchInput.style.borderColor = 'red';
            setTimeout(() => searchInput.style.borderColor = '#e72c2c', 1000);
        }
    });
});