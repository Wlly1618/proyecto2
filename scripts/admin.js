const packs = [
  "azul", "blanco", "rojo"
]

const categorys = [
  "regional", "nacional", "internacional", "especial" 
]

function load_datalist(data_element, data) {
  let text = ``;
  data.forEach(item => {
    text += `<option value="${item}"> ${item} </option>`;
  });

  data_element.innerHTML = text;
}

load_datalist(data_search, packs);
load_datalist(data_category, categorys)
