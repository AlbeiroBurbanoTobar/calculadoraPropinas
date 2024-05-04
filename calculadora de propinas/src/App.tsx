// importaciones necesarias
import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

/**
 * Componente principal de la aplicación que gestiona la interfaz de usuario para la calculadora de propinas y consumo.
 * Utiliza un reducer para manejar el estado global de los ítems del menú y las propinas.
 *
 * @return {JSX.Element} El JSX del componente principal que incluye cabecera, menú, contenido de la orden,
 *                       formulario de porcentaje de propina, totales de la orden y pie de página.
 */

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
        <header className="bg-teal-400 py-5">
          <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
        </header>

        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className='p-5'>
            <h2 className='font-black text-4xl'>Menú</h2>
            <div className='mt-10 space-y-3'>
              {menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              ))}
            </div>
          </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {state.order.length ? (
              <>
                  <OrderContents
                    order={state.order}
                    dispatch={dispatch}
                  />
                  <TipPercentageForm 
                    dispatch={dispatch}
                    tip={state.tip}
                  />
                  <OrderTotals 
                    order={state.order}
                    tip={state.tip}
                    dispatch={dispatch}
                  />
              </>
            ) : (
              <p className="text-center">La orden está vacía</p>
            )}
          </div>
          <footer className="bg-teal-400 py-5 text-center">
            <p className="font-bold text-white">Creado por Albeiro Burbano - Encuéntrame en:</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.freelancer.com/u/Albeiro73?sb=t" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200">Freelancer</a>
                <a href="http://www.linkedin.com/in/albeiro-jose-burbano-tobar-759ba4297" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200">LinkedIn</a>
                <a href="https://github.com/AlbeiroBurbanoTobar/ppi_pl_BurbanoA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200">GitHub</a>
                <a href="https://stackoverflow.com/users/24090991/albeiro-burbano" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200">Stack Overflow</a>
            </div>
          </footer>
        </main>
    </>
  );
}

export default App;
