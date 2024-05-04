import type { MenuItem } from '../types';

/**
 * Define una lista estática de ítems del menú para ser utilizada en la aplicación.
 * Cada ítem del menú es un objeto que incluye un identificador único (id), el nombre del ítem y su precio en COP.
 * 
 * Esta lista puede ser utilizada para mostrar los ítems disponibles en una interfaz de usuario,
 * permitiendo a los usuarios seleccionar y añadir estos ítems a su pedido.
 */

export const menuItems: MenuItem[] = [
    {
        "id": 1,
        "name": "Pizza hawaiana",
        "price": 3550  
    },
    {
        "id": 2,
        "name": "Pizza napolitana",
        "price": 3700  
    },
    {
        "id": 3,
        "name": "Pizza de pepperoni",
        "price": 3650  
    },
    {
        "id": 4,
        "name": "Pizza hawaiana Grande",
        "price": 5000  
    },
    {
        "id": 5,
        "name": "Pizza napolitana Grande",
        "price": 5450  
    },
    {
        "id": 6,
        "name": "Rebanada de Pastel de Chocolate",
        "price": 2500  
    },
    {
        "id": 7,
        "name": "Rebanada de Pastel de vainilla",
        "price": 2500  
    },
    {
        "id": 8,
        "name": "Jugo de Naranja",
        "price": 2100  
    },
    {
        "id": 9,
        "name": "Jugo de Mora",
        "price": 2100  
    },
    {
        "id": 10,
        "name": "Jugo de Mango",
        "price": 2100  
    },
    {
        "id": 11,
        "name": "Gaseosa",
        "price": 2000  
    },
    {
        "id": 12,
        "name": "Café Americano",
        "price": 2300  
    },
    {
        "id": 13,
        "name": "Café Capuchino",
        "price": 2500  
    }
];
