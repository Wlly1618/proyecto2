let txt = `
  <h2 class="product-category">¡Ofertas para Tu Próxima Escapada!</h2>
  <div class="row row-cols-3">
`

const card = (obj) => {
  return `
  <div class="product-container">
    <div class="product-card border border-bottom" id="promo1">
        <div class="product-image">
            <img src="${obj.url}" class="product-thumb" alt="">
            <button class="card-btn">Ver Más</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${obj.name}</h2>
            <p class="product-description">$${obj.price}.00</p>
            <p class="product-description">$${obj.description}.00</p>
        </div>
    </div>
  </div>
  `
}

const data_packs_to_card = JSON.parse(localStorage.getItem('array_packs'));

function load_cards()
{
  data_packs_to_card.forEach(item => {
    txt += card(item)
  });

  txt += `</div>`;

  packs_cards.innerHTML = txt;
}

load_cards();
