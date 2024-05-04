import { MenuItem, OrderItem } from "../types";

/**
 * Tipos de acciones que pueden ser despachadas en el reducer de órdenes.
 */

export type OrderActions = 

    // Añade un ítem al pedido.
    { type: 'add-item', payload: { item: MenuItem } } |
    
    // Elimina un ítem del pedido por ID.
    { type: 'remove-item', payload: { id: MenuItem['id'] } } | 

    // Finaliza el pedido, reiniciando el estado.
    { type: 'place-order' } | 

    // Añade una propina al total del pedido.
    { type: 'add-tip', payload: { value: number } }; 

/**
 * Define el estado inicial y la estructura del estado del pedido.
 */

export type OrderState = {
    // Array de ítems ordenados.
    order: OrderItem[],
    
    // Valor de la propina añadida al pedido.
    tip: number 
};

/**
 * Estado inicial del pedido con la lista de ítems vacía y propina en cero.
 */

export const initialState: OrderState = {
    order: [],
    tip: 0
};

/**
 * Reducer para manejar las acciones relacionadas con el estado del pedido.
 *
 * @param {OrderState} state El estado actual del pedido.
 * @param {OrderActions} action La acción despachada.
 * @return {OrderState} El nuevo estado del pedido después de aplicar la acción.
 */

export const orderReducer = (
        state: OrderState = initialState,
        action: OrderActions
    ): OrderState => {
        switch (action.type) {
            case 'add-item': {
                const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);
                if (itemExist) {

                    // Incrementa la cantidad del ítem si ya existe en el pedido.
                    return {
                        ...state,
                        order: state.order.map(orderItem =>
                            orderItem.id === action.payload.item.id ? 
                            {...orderItem, quantity: orderItem.quantity + 1} : 
                            orderItem
                        )
                    };
                } else {

                    // Añade el nuevo ítem al pedido si no existe.
                    const newItem: OrderItem = {...action.payload.item, quantity: 1};
                    return {
                        ...state,
                        order: [...state.order, newItem]
                    };
                }
            }
            case 'remove-item':

                // Elimina el ítem del pedido por ID.
                return {
                    ...state,
                    order: state.order.filter(item => item.id !== action.payload.id)
                };
            case 'place-order':

                // Reinicia el pedido a su estado inicial.
                return {
                    ...state,
                    order: [],
                    tip: 0
                };
            case 'add-tip':
                
                // Añade la propina especificada al estado del pedido.
                return {
                    ...state,
                    tip: action.payload.value
                };
            default:
                return state;
        }
    };
