// importcaciones necesarias 
import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

// Definición de las propiedades esperadas por el componente MenuItem.
type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

/**
 * Componente MenuItem que renderiza un botón individual para cada ítem del menú.
 * Al hacer clic en el botón, el ítem se añade a la orden actual.
 * 
 * Props:
 *   - item: Objeto que contiene la información del ítem del menú, incluyendo nombre y precio.
 *   - dispatch: Función dispatch para enviar acciones al reducer de ordenes.
 * 
 * @param {MenuItemProps} props Las propiedades que recibe el componente.
 * @return {JSX.Element} Elemento JSX que representa un botón con el nombre y precio del ítem.
 */
export default function MenuItem({ item, dispatch }: MenuItemProps): JSX.Element {
  return (
    <button
      className='border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full'
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >

       {/* Muestra el nombre del ítem */}
      <p>{item.name}</p>

      {/* Muestra el precio del ítem */}
      <p className='font-black'>${item.price}</p> 
    </button>
  )
}
