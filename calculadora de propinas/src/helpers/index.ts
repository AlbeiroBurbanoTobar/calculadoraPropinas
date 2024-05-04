/**
 * Formatea un número dado como una cantidad de dinero en formato de moneda.
 * Esta función utiliza el objeto `Intl.NumberFormat` para generar un formato de moneda,
 * específicamente en pesos colombianos (COP).
 *
 * @param {number} quantity Cantidad numérica a formatear.
 * @return {string} Retorna la cantidad formateada como un string en formato de moneda USD.
 */

export function formatCurrency(quantity: number): string {

    // Crear un objeto de formato de número internacional para USD.
    return new Intl.NumberFormat('en-US', {

        // Define el estilo de formato como moneda.
        style: 'currency', 

        // Define el tipo de moneda como peso colombiano (COP).
        currency: 'COP'   

         // Formatea la cantidad numérica en el formato especificado.
    }).format(quantity);
}

