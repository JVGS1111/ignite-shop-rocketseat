'use client'

import { ReactNode, createContext, useState } from "react";


interface ShopContextProps {
    handleOpenCart: (value?: boolean) => void;
    isCartOpen: boolean;
}

interface ShopContextProviderProps {
    children: ReactNode
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopContextProviderProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleOpenCart(value?: boolean) {
        console.log("handleOpenCart");

        if (value != undefined) {
            return setIsCartOpen(value);
        }

        setIsCartOpen(!isCartOpen);
    }

    return (
        <ShopContext.Provider value={{
            isCartOpen,
            handleOpenCart
        }}>
            {children}
        </ShopContext.Provider>
    )
}