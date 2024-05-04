/**
 * Define las propiedades de un ítem individual en el menú de un restaurante o tienda.
 * 
 * @typedef {Object} MenuItem
 * @property {number} id - El identificador único del ítem en el menú.
 * @property {string} name - El nombre del ítem, como aparece en el menú.
 * @property {number} price - El precio del ítem en la moneda local.
 */
export type MenuItem = {
    id: number,
    name: string,
    price: number
};

/**
 * Extiende el tipo `MenuItem` para incluir la cantidad de cada ítem en una orden.
 * Este tipo se utiliza para representar los ítems que han sido añadidos a una orden de compra.
 * 
 * @typedef {Object} OrderItem
 * @property {number} id - Hereda el identificador único del ítem de `MenuItem`.
 * @property {string} name - Hereda el nombre del ítem de `MenuItem`.
 * @property {number} price - Hereda el precio del ítem de `MenuItem`.
 * @property {number} quantity - La cantidad de este ítem que se ha añadido a la orden.
 */

export type OrderItem = MenuItem & {
    quantity: number
};
