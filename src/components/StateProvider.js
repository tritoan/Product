import React,{createContext, useContext,useReducer} from 'react';
//preparing the data layer
export const StateContext = createContext();
// wrap our components, provide the provider
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.StateProvider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.StateProvider>
);
//this is how we can use it inside of a components
export const useStateValue = () => useContext(StateContext);