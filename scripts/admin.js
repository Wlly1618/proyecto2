// Variables
let packs = get_from_storage("array_packs");

if (packs.length < 1)
{
  packs.push({
    id: 1,
    name: "Escapada a Mendoza",
    category: "Regional",
    price: "45000",
    description: "Viaje re copado a Mendoza",
    url: "https://peakvisor.com/photo/Andes-Mountains-Argentina-Cerro-Aconcagua-1.jpg"
  });

  packs.push({
    id: 2,
    name: "Escapada a Miami",
    category: "Internacional",
    price: "78000",
    description: "Viaje re copado a Miami",
    url: "https://www.vamosamiami.net/files/wp-content/uploads/VAM_Clima_01.jpg"
  });

  set_in_localstorage("array_packs", packs);
}

const packs_name = [];
const categorys = ["Regional", "Nacional", "Internacional", "Especial"];

// Funciones
function get_from_storage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function set_in_localstorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

const borrarPaquete = (id) => {
  Swal.fire({
    title: "¿Estas seguro de borrar el paquete?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ff6f61",
    cancelButtonColor: "#4d5151",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Buscar la posición del paquete en el array
      const index = packs.findIndex(item => item.id === parseInt(id));

      if (index !== -1) {
        // Borrar el paquete del array
        packs.splice(index, 1);

        // Actualizar el localStorage
        set_in_localstorage("array_packs", packs);

        // Actualizar la tabla
        load_data_table(pack_table, packs);

        Swal.fire({
          title: "Eliminado",
          text: "El paquete ha sido eliminado",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "No se encontró el paquete a eliminar",
          icon: "error",
        });
      }
    }
  });
};


function get_packs_name(out) {
  packs.forEach((item) => {
    out.push(item.name);
  });
}

function load_datalist(data_element, data) {
  let text = ``;
  data.forEach((item) => {
    text += `<option value="${item}"> ${item} </option>`;
  });

  data_element.innerHTML = text;
}

async function load_data_table(table, data) {
  let text = ``;
  data.forEach((item) => {
    text += `
      <tr>
        <th>${item.id}</th>
        <th>${item.name}</th>
        <th>${item.category}</th>
        <th>${item.price}</th>
        <td><button><i class="bi bi-eye"></i></button><button><i class="bi bi-recycle"></i></button><button onclick="borrarPaquete('${item.id}')"><i class="bi bi-trash"></i></button></td>
      </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = text;
}

get_packs_name(packs_name);

load_datalist(data_search, packs_name);
load_datalist(data_category, categorys);

load_data_table(pack_table, packs);

create_pack_form.addEventListener("submit", async (event) => {
  event.preventDefault();
    // Validar el formulario
    if (!validateForm()) {
      return;
    }

  packs = get_from_storage("array_packs");
  // packs = [];

  if (packs.length > 0) {
    it = packs[packs.length - 1].id + 1;
  } else {
    it = 1;
  }

  const item = {
    id: it,
    name: pack_name.value,
    category: category.value,
    price: price.value,
    description: description.value,
    url: url_img.value,
  };

  packs.push(item);

  set_in_localstorage("array_packs", packs);
  
  load_data_table(pack_table, packs);

  create_pack_form.reset(); 
});

// busqueda de paquetes en la tabla
document.getElementById("search_form").addEventListener("submit", function(event) {
  event.preventDefault();

  const searchQuery = document.getElementById("input_search").value.toLowerCase();
  const filteredPacks = packs.filter(pack => pack.name.toLowerCase().includes(searchQuery));

  load_data_table(pack_table, filteredPacks);
});
