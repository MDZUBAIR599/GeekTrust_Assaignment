import React, { createContext, useReducer } from 'react'
import { cart_Reducer } from '../Reducers/AppReducer'
export const Appcontext = createContext();
export default function AppContextProvider({children}) {
  const[state,dispatch]=useReducer(cart_Reducer,{
    products:[],
    cart:[],
    FilterProducts:[],
    SeacrhedProducts:[]
  })
  return (
    <Appcontext.Provider value={{state,dispatch}}>
      {children}
    </Appcontext.Provider>
  )
}
