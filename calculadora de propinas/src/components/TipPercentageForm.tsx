// importaciones necesarias
import type { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

// Opciones de propina que el usuario puede seleccionar.
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

// Definición de las propiedades que recibe el componente TipPercentageForm.
type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}

/**
 * Componente TipPercentageForm que permite al usuario seleccionar un porcentaje de propina.
 * El usuario puede elegir entre varias opciones definidas que se muestran como botones de radio.
 *
 * Props:
 *   - dispatch: Función dispatch para enviar acciones al reducer de ordenes.
 *   - tip: Valor actual de la propina seleccionada.
 *
 * @param {TipPercentageFormProps} props Las propiedades que recibe el componente.
 * @return {JSX.Element} Elemento JSX que representa el formulario de selección de propina.
 */
export default function TipPercentageForm({ dispatch, tip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={ e => dispatch({type: 'add-tip', payload: { value: +e.target.value}}) }
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
