// importaciones necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Punto de entrada principal de la aplicación React.
 * Este script monta la aplicación React en el DOM utilizando ReactDOM.
 * Envuelve el componente principal (<App />) dentro de <React.StrictMode> para 
 * destacar posibles problemas en la aplicación que podrían llevar a efectos secundarios no deseados.
 * 
 * - React.StrictMode: Es una herramienta para resaltar problemas en una aplicación React. No afecta la build de producción.
 * - ReactDOM.createRoot: Crea un contenedor raíz para la aplicación React y lo asocia con un elemento del DOM existente.
 * 
 * La aplicación se monta en un elemento con el ID 'root', que debe estar presente en el archivo HTML de la aplicación.
 */

// Localiza el elemento 'root' en el DOM. Asume que existe un elemento con id 'root'.
const rootElement = document.getElementById('root');

if (rootElement) {
  
    // Crea un contenedor raíz React y monta la aplicación en este elemento.
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App /> 
        </React.StrictMode>
    );
} else {
    console.error("No se encontró el elemento 'root'. Asegúrate de que el HTML tiene un elemento con id 'root'.");
}
