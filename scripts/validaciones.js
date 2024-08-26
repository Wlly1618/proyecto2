// validaciones.js

/**
 * Valida el nombre del paquete.
 * @param {string} name - Nombre del paquete.
 * @returns {boolean} - Retorna true si es válido, false si no.
 */
function validarNombre(name) {
    return name.length >= 5 && name.length <= 50;
}

/**
 * Valida la categoría del paquete.
 * @param {string} category - Categoría del paquete.
 * @param {string[]} validCategories - Categorías válidas.
 * @returns {boolean} - Retorna true si es válida, false si no.
 */
function validarCategoria(category, validCategories) {
    return validCategories.includes(category);
}

/**
 * Valida el precio del paquete.
 * @param {string} price - Precio del paquete.
 * @returns {boolean} - Retorna true si es un número positivo, false si no.
 */
function validarPrecio(price) {
    const priceNumber = parseFloat(price);
    return !isNaN(priceNumber) && priceNumber > 0;
}

/**
 * Valida la URL de la imagen.
 * @param {string} url - URL de la imagen.
 * @returns {boolean} - Retorna true si es una URL válida, false si no.
 */
function validarURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Valida la descripción del paquete.
 * @param {string} description - Descripción del paquete.
 * @returns {boolean} - Retorna true si es válida, false si no.
 */
function validarDescripcion(description) {
    return description.length >= 10 && description.length <= 80;
}
