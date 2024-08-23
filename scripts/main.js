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


    document.getElementById('form-comentarios').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;
        
        const comentarioItem = document.createElement('div');
        comentarioItem.classList.add('comentario-item');
        
        const comentarioFoto = document.createElement('img');
        comentarioFoto.src = 'default-avatar.jpg'; // Puedes reemplazar esta imagen con una predeterminada
        comentarioFoto.alt = `Foto de ${nombre}`;
        comentarioFoto.classList.add('comentario-foto');
        
        const comentarioTexto = document.createElement('div');
        comentarioTexto.classList.add('comentario-texto');
        
        const comentarioNombre = document.createElement('h4');
        comentarioNombre.textContent = nombre;
        
        const comentarioParrafo = document.createElement('p');
        comentarioParrafo.textContent = comentario;
        
        comentarioTexto.appendChild(comentarioNombre);
        comentarioTexto.appendChild(comentarioParrafo);
        
        comentarioItem.appendChild(comentarioFoto);
        comentarioItem.appendChild(comentarioTexto);
        
        document.getElementById('comentarios-lista').appendChild(comentarioItem);
        
        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
      });
      

    