// mostrar mensajes de error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-floating mb-3 error";
    const small = formControl.querySelector('small');
    if (small) {
      small.innerText = message;
    } else {
      const errorElement = document.createElement('small');
      errorElement.innerText = message;
      errorElement.style.color = "red";
      formControl.appendChild(errorElement);
    }
  }
  
  // mostrar que el input es válido
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-floating mb-3 success";
    const small = formControl.querySelector('small');
    if (small) {
      small.innerText = '';
    }
  }
  
  // validar que un campo no esté vacío
  function checkRequired(inputArr) {
    let isValid = true;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} es obligatorio`);
        isValid = false;
      } else {
        showSuccess(input);
      }
    });
    return isValid;
  }
  
  // validar la longitud de los campos
  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input, `${getFieldName(input)} debe tener al menos ${min} caracteres`);
      return false;
    } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} debe tener menos de ${max} caracteres`);
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  
  // validar el formato de la URL
  function checkURL(input) {
    const re = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    if (!re.test(input.value.trim())) {
      showError(input, 'La URL no es válida');
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  
  // validar que el precio sea un número positivo
  function checkPrice(input) {
    if (input.value <= 0) {
      showError(input, 'El precio debe ser un número positivo');
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  
  // obtener el nombre del campo
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  
  // validar el formulario completo
  function validateForm() {
    let isValid = checkRequired([pack_name, category, price, url_img, description]);
  
    isValid = checkLength(pack_name, 3, 50) && isValid;
    isValid = checkLength(description, 10, 300) && isValid;
    isValid = checkURL(url_img) && isValid;
    isValid = checkPrice(price) && isValid;
  
    return isValid;
  }
  

  create_pack_form.addEventListener('submit', function(e) {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
  