import { useReducer } from 'react'
import { Action, Language, State, fromLanguage } from '../types'

// pensamos en todos los estados q podemos llegar a necesitar y los usamos con un useReducer.
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  // el reducer define el comportamiento de cada accion y el useReducer administra este comportamiento.


  //creamos el reducer *recibe un estado y una accion*
                  //define la estructura del estado inicial y la accion a realizar.
  const reducer = (state: State, action: Action) => {
    // {desestructura objetos} > extrae la propiedad type del objeto action
    const { type } = action 
  
    //aca se puede usar if o switch
    switch (type) {
      case 'INTERCHANGE_LANGUAGES':
        return {
          //creamos una 'copia' del estado original antes de modificarlo.
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage
        }
      case 'SET_FROM_LANGUAGE':
        return {
          ...state,
          fromLanguage: action.payload
        }
      case 'SET_TO_LANGUAGE':
        return {
          ...state,
          toLanguage: action.payload
        }
      case 'SET_FROM_TEXT':
        return {
          ...state,
          loading: true,
          fromText: action.payload
        }
      case 'SET_RESULT':
        return {
          ...state,
          loading: false,
          result: action.payload
        }
      default:
        return state
    }
  }


export function useStore() {
    //hay que pasarle un estado inicial y un reducer.
    const [{fromLanguage,
        toLanguage,
        fromText,
        result,                                   //aca si tenemos que pasar el estado inicial con los valores
        loading} , dispatch] = useReducer(reducer,initialState)
                //permite que usemos el dispatch para definir las acciones que queremos que hagan.
                //* no tiene ningun valor hasta q lo usemos *//

    //exportar un contrato para que en los componentes que usen este hook se puedan acceder a los datos sin usar Dispatch dentro del componente.
        const interchangeLanguages =() => {dispatch({type: 'INTERCHANGE_LANGUAGES'})}
                                            //le estamos enviando una peticion para que ejecute esta accion al reducer.
        const setFromLanguage = (payload: fromLanguage) => {dispatch({type: 'SET_FROM_LANGUAGE', payload})} 
                                          //ejecutaria 'action.payload' del reducer que coincida con el valor del type.
        const setToLanguage = (payload: Language) => {dispatch({type: 'SET_TO_LANGUAGE', payload})}
                          //Definimos los valores posibles q puede tener 'payload'.
        const setFromText = (payload: Language) => {dispatch({type: 'SET_FROM_TEXT', payload})}
        
        const setResult = (payload: Language) => {dispatch({type: 'SET_RESULT', payload})}

        return {fromLanguage, toLanguage, fromText, result, loading, 
        interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult}
}
      