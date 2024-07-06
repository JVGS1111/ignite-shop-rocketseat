'use client'

import { ReactNode, createContext, useState } from "react";
import { numberToCurrency } from "../utils/intl";


interface ShopContextProps {
    handleOpenCart: (value?: boolean) => void;
    addProduct: (prod: Product) => void;
    getCartLenght: () => number;
    removeProduct: (id: string) => void;
    getAmount: () => string;
    products: Product[];
    isCartOpen: boolean;
}

interface ShopContextProviderProps {
    children: ReactNode
}

export type Product = {
    id: string,
    name: string,
    imageURL: string,
    price: number,
    description: string,
    defaultPriceId: string,
    priceFormatted: string,
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopContextProviderProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    function handleOpenCart(value?: boolean) {
        console.log("handleOpenCart");

        if (value != undefined) {
            return setIsCartOpen(value);
        }

        setIsCartOpen(!isCartOpen);
    }

    function addProduct(product: Product) {

        const prodIsInTheCart = checkIfProductIsInCart(product.id);

        if (prodIsInTheCart) return;
        const newCart = [...products, product];

        setProducts(newCart);
    }

    function checkIfProductIsInCart(id: string) {
        if (products.length == 0) {
            return false;
        }

        const prodIndex = products.findIndex((prod) => prod.id === id);
        if (prodIndex != -1) {
            return true;
        }

        return false;
    }

    function getCartLenght() {
        return products.length;
    }

    function removeProduct(id: string) {
        if (products.length == 0) {
            return
        }
        const newArr = products.filter((prod) => prod.id !== id);

        setProducts([...newArr]);
    }

    function getAmount() {
        if (products.length == 0) {
            return numberToCurrency(0);
        }
        let amount = 0;
        products.forEach(item => {
            amount = amount + item.price;
        })

        return numberToCurrency(amount);
    }

    return (
        <ShopContext.Provider value={{
            isCartOpen,
            products,
            handleOpenCart,
            getCartLenght,
            addProduct,
            removeProduct,
            getAmount

        }}>
            {children}
        </ShopContext.Provider>
    )
}