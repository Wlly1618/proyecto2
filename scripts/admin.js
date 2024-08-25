function get_from_storage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function set_in_localstorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

const borrarPaquete = () => {
  Swal.fire({
    title: "¿Estas seguro de borrar el paquete?",
    text: "No podras revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ff6f61",
    cancelButtonColor: "#4d5151",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado",
        text: "El paquete ha sido eliminado",
        icon: "success",
      });
    }
  });
};

let packs = get_from_storage("array_packs");

const packs_name = [];
get_packs_name(packs_name);

const categorys = ["Regional", "Nacional", "Internacional", "Especial"];

function get_packs_name(out) {
  packs.forEach((item) => {
    out.push(item.name);
  });
}

function load_datalist(data_element, data) {
  let text = ``;
  data.forEach((item) => {
    console.log(item);
    text += `<option value="${item}"> ${item} </option>`;
  });

  data_element.innerHTML = text;
}

load_datalist(data_search, packs_name);
load_datalist(data_category, categorys);

async function load_data_table(table, data) {
  let text = ``;
  data.forEach((item) => {
    text += `
      <tr>
        <th>${item.id}</th>
        <th>${item.name}</th>
        <th>${item.category}</th>
        <th>${item.price}</th>
        <td><button><i class="bi bi-arrow-down-up"></i></button>
        <button onclick="borrarPaquete()"><i class="bi bi-trash"></i></button></td>
      </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = text;
}

load_data_table(pack_table, packs);

async function create_pack(form, key) {
  const form_data = new FormData(form);
  const item = {};

  form_data.forEach((value) => {
    item[3] = value;
  });

  console.log(item);

  // packs = get_from_storage(key);

  packs.push(item);

  // set_in_localstorage(key, packs);
}

create_pack_form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await create_pack(create_pack_form, "array_packs");

  await load_data_table(pack_table, packs);

  create_pack_form.reset();
});
