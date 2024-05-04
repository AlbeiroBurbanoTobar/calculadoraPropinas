// importaciones necesarias
import { Dispatch, useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

// Define las propiedades que recibe el componente OrderTotals.
type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

/**
 * Componente OrderTotals que calcula y muestra los totales de la orden, incluyendo
 * el subtotal, la propina basada en un porcentaje y el total final de la orden.
 * También incluye un botón para guardar la orden.
 *
 * Props:
 *   - order: Array de ítems de la orden que incluye cantidad y precio.
 *   - tip: Porcentaje de propina seleccionado.
 *   - dispatch: Función dispatch para enviar acciones al reducer.
 *
 * @param {OrderTotalsProps} props Las propiedades que recibe el componente.
 * @return {JSX.Element} Elemento JSX que representa los totales de la orden y un botón de acción.
 */
export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    // Calcula el subtotal de la orden sumando el precio total de cada ítem.
    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

    // Calcula el monto de la propina basado en el subtotal y el porcentaje de propina.
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);

    // Calcula el total a pagar sumando el subtotal y la propina.
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:
                    <span className="font-bold">{ formatCurrency(subtotalAmount()) }</span>
                </p>
                <p>Propina:
                    <span className="font-bold">{ formatCurrency(tipAmount()) }</span>
                </p>
                <p>Total a Pagar:
                    <span className="font-bold">{ formatCurrency(totalAmount()) }</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount() === 0}
                onClick={() => dispatch({type: 'place-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}
