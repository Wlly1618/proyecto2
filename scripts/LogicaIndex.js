document.getElementById('botonBusqueda').addEventListener('click', function() {
    const query = document.getElementById('campoBusqueda').value.toLowerCase();
    let results = '';
    
    const promos = [
        { id: 'promo1', text: 'Explora las Islas Griegas ¡Descuento del 30% en paquetes de 7 noches en Santorini!' },
        { id: 'promo2', text: 'Aventura en Japón ¡Reserva anticipada con un 25% de descuento en tours por Tokio y Kioto!' },
        { id: 'promo3', text: 'Cultura y Playas en México ¡Descuento del 20% en estancias de 5 noches en Cancún!' },
        { id: 'promo4', text: 'Descubre la Riviera Maya ¡Oferta especial del 15% en paquetes todo incluido!' }
    ];
    
    promos.forEach((promo) => {
        if (promo.text.toLowerCase().includes(query) && query !== '') {
            results += `<li><a href="#${promo.id}">${promo.text}</a></li>`;
        }
    });

    const lugares = [
      {id: 'lugar1', text: ' Rio de Janeiro '},
      {id: 'lugar1', text: ' Rio de Janeiro paquetes '},
      {id: 'lugar1', text: ' Rio de Janeiro hoteles '},
      {id: 'lugar1', text: ' Rio de Janeiro autos '},
      {id: 'lugar1', text: ' Brasil paquetes '}, 
      {id: 'lugar1', text: ' Brasil hoteles '}, 
      {id: 'lugar1', text: ' Brasil autos '}, 
      {id: 'lugar2', text: ' Seul '},
      {id: 'lugar2', text: ' Seul paquetes '},
      {id: 'lugar2', text: ' Seul hoteles '},
      {id: 'lugar2', text: ' Seul autos '},
      {id: 'lugar2', text: ' Corea del Sur '}, 
      {id: 'lugar3', text: ' Madrid '},
      {id: 'lugar3', text: ' Madrid paquetes '},
      {id: 'lugar3', text: ' Madrid hoteles '},
      {id: 'lugar3', text: ' Madrid autos '},
      {id: 'lugar3', text: ' España paquetes '}, 
      {id: 'lugar3', text: ' España hoteles '}, 
      {id: 'lugar3', text: ' España autos '}, 
      {id: 'lugar4', text: ' Roma '},
      {id: 'lugar4', text: ' Roma paquetes '},
      {id: 'lugar4', text: ' Roma hoteles '},
      {id: 'lugar4', text: ' Roma autos '},
      {id: 'lugar4', text: ' Italia '}, 
      {id: 'lugar5', text: ' New York '},
      {id: 'lugar5', text: ' New York paquetes '},
      {id: 'lugar5', text: ' New York hoteles '},
      {id: 'lugar5', text: ' New York autos '},
      {id: 'lugar5', text: ' Estados Unidos paquetes '}, 
      {id: 'lugar5', text: ' Estados Unidos hoteles '}, 
      {id: 'lugar5', text: ' Estados Unidos autos '}, 
      {id: 'lugar5', text: ' Estados Unidos '},
      {id: 'lugar6', text: ' Cancun paquetes '},
      {id: 'lugar6', text: ' Cancun hoteles '},
      {id: 'lugar6', text: ' Cancun autos '},
      {id: 'lugar6', text: ' Mexico '}
    ];
    lugares.forEach((lugar)=>{
      if(lugar.text.toLowerCase().includes(query) && query !== ''){
        results += `<li><a href="#${lugar.id}">${lugar.text}</a></li>`;
      }
    });


    const alojamientos = [
      {id: 'Alojamiento1', text: 'Hotel Madrid'},
      {id: 'Alojamiento2', text: ' Hotel Buenos Aires '},
      {id: 'Alojamiento3', text: ' Hotel Rio de Janeiro '},
      {id: 'Alojamiento4', text: ' Hotel Florencia'}
     
    ];
   alojamientos.forEach((Alojamiento)=>{
      if(Alojamiento.text.toLowerCase().includes(query) && query !== ''){
        results += `<li><a href="#${Alojamiento.id}">${Alojamiento.text}</a></li>`;
      }
    });
   
    const disneyy = [
      {id: 'Disney', text: ' Experencia Disney'},
      {id: 'Disney', text: ' Disney 15 '},
      {id: 'Disney', text: ' Paquetes Disney'}
     
    ];
   disneyy.forEach((Disney)=>{
      if(Disney.text.toLowerCase().includes(query) && query !== ''){
        results += `<li><a href="#${Disney.id}">${Disney.text}</a></li>`;
      }
    });
    
    const provincias = [
      {id: 'provincia1', text: 'Patagonia'},
      {id: 'provincia2', text: ' Tandil'},
      {id: 'provincia3', text: ' Mendoza'},
      {id: 'provincia4', text: ' Bariloche'},
      {id: 'provincia5', text: ' Buenos Aires'},
      {id: 'provincia6', text: ' Salta'},
      {id: 'provincia7', text: ' Carlos Paz'},
     
    ];
   provincias.forEach((provincia)=>{
      if(provincia.text.toLowerCase().includes(query) && query !== ''){
        results += `<li><a href="#${provincia.id}">${provincia.text}</a></li>`;
      }
    });
    document.getElementById('searchResults').innerHTML = results ? `<ul>${results}</ul>` : '<p>No hay resultados.</p>';
});

document.getElementById('form-comentarios').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    const comentarioItem = document.createElement('div');
    comentarioItem.classList.add('comentario-item');
    
    const comentarioFoto = document.createElement('img');
    comentarioFoto.src = 'https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg'; 
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
    
    
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
  });
  

  
