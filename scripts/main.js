/*function scrollLeft() {
    const container = document.getElementById('cardsContainer');
    container.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.getElementById('cardsContainer');
    container.scrollBy({ left: 150, behavior: 'smooth' });
} */

    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById('backBtn');
    let nextBtn = document.getElementById('nextBtn');
  
    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });
  
    nextBtn.addEventListener('click', () => {
      scrollContainer.scrollLeft += scrollContainer.clientWidth;
    });
  
    backBtn.addEventListener('click', () => {
      scrollContainer.scrollLeft -= scrollContainer.clientWidth;
    });