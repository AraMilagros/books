import { createContext } from "react";

export const TemaContext = createContext();

export function TemaContextProvider(){
    return(
        <TemaContext.Provider value="20">

        </TemaContext.Provider>
    );
}