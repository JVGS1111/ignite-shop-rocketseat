import { ReactNode, createContext } from "react";


interface ShopContextProps {

}

interface ShopContextProviderProps {
    children: ReactNode
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopContextProviderProps) {

    return (
        <ShopContext.Provider value={{

        }}>
            {children}
        </ShopContext.Provider>
    )
}