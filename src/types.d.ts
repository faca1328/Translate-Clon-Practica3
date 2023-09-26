import { AUTO_LANGUAGES, SUPPORTED_LANGUAGES } from "./constants"


//pasamos SUPPORTED_LANGUAGES y AUTO_LANGUAGES asi para que puedan ser type y pasar solo los valores posibles
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguages = typeof AUTO_LANGUAGES

//Aca permitimos que se pueda seleccionr uno de los idomas posibles o 'auto'.
export type fromLanguage = Language | AutoLanguages

export interface State  {
    fromLanguage: string
    toLanguage: string
    fromText: string
    result: string
    loading: boolean
}

export type Action = 
    {type: 'INTERCHANGE_LANGUAGES'} |
    {type: 'SET_FROM_LANGUAGE', payload: string} |
    {type: 'SET_TO_LANGUAGE', payload: string} |
    {type: 'SET_FROM_TEXT', payload: string} |
    {type: 'SET_RESULT', payload: string} 
