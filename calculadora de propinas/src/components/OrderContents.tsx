// importaciones necesarias
import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

// Definición de las propiedades esperadas por el componente OrderContents.
type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}

/**
 * Componente OrderContents que muestra los ítems que están actualmente en la orden.
 * Cada ítem incluye detalles como el nombre, precio unitario, cantidad y el precio total por esa cantidad.
 * También proporciona un botón para eliminar cada ítem de la orden.
 *
 * Props:
 *   - order: Array de ítems que están actualmente en la orden.
 *   - dispatch: Función dispatch para enviar acciones al reducer de ordenes.
 *
 * @param {OrderContentsProps} props Las propiedades que recibe el componente.
 * @return {JSX.Element} Elemento JSX que representa la lista de ítems en la orden con opciones para eliminar cada uno.
 */
export default function OrderContents({ order, dispatch }: OrderContentsProps): JSX.Element {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-10">
            {order.map( item => (
                <div 
                    key={item.id}
                    className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                >
                    <div>
                        <p className="text-lg">

                            {/* Muestra el nombre y el precio unitario formateado del ítem */}
                            {item.name} - {formatCurrency( item.price) } 
                        </p>
                        <p className="font-black">

                            {/* Muestra la cantidad del ítem y el precio total calculado */}
                            Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity) } 
                        </p>
                    </div>

                    <button
                        className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                    >
                        X {/* Botón para eliminar el ítem de la orden */}
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
