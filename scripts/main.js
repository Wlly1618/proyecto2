/*function scrollLeft() {
    const container = document.getElementById('cardsContainer');
    container.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.getElementById('cardsContainer');
    container.scrollBy({ left: 150, behavior: 'smooth' });
} */

    document.addEventListener('DOMContentLoaded', function() {
        let scrollContainer = document.getElementById('cardsContainer');
        let backBtn = document.querySelector('.scroll-btn.left');
        let nextBtn = document.querySelector('.scroll-btn.right');
    
        // Desplazamiento horizontal con la rueda del mouse
        scrollContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
        });
    
        // Botón para desplazar hacia la derecha
        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollLeft += scrollContainer.clientWidth;
        });
    
        // Botón para desplazar hacia la izquierda
        backBtn.addEventListener('click', () => {
            scrollContainer.scrollLeft -= scrollContainer.clientWidth;
        });
    });
    
