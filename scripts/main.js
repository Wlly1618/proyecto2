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
    
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nextBtn')];
    const preBtn = [...document.querySelectorAll('.backBtn')];
    
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });

