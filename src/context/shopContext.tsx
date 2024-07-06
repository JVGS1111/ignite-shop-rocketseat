'use client'

import { ReactNode, createContext, useState } from "react";
import { numberToCurrency } from "../utils/intl";
import axios from "axios";


interface ShopContextProps {
    handleOpenCart: (value?: boolean) => void;
    addProduct: (prod: Product) => void;
    getCartLenght: () => number;
    removeProduct: (id: string) => void;
    getAmount: () => string;
    handleBuyItens: () => void;
    products: Product[];
    isCartOpen: boolean;
    isCreationCheckoutSession: boolean;
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
    const [isCreationCheckoutSession, setIsCreationCheckoutSession] = useState(false);

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

    async function handleBuyItens() {
        if (products.length == 0) {
            return
        }

        try {
            setIsCreationCheckoutSession(true);
            const array = _createStripeCheckoutArray();
            const { data } = await axios.post("/api/checkout", {
                products: array
            });
            const { checkoutUrl } = data;
            window.location.href = checkoutUrl;
        } catch (error) {
            setIsCreationCheckoutSession(false);
            alert("Falha ao redirecionar ao checkout!");
        }
    }

    function _createStripeCheckoutArray() {
        const array = products.map(item => {
            return {
                priceId: item.defaultPriceId
            }
        });
        return array;
    }

    return (
        <ShopContext.Provider value={{
            isCartOpen,
            products,
            isCreationCheckoutSession,
            handleOpenCart,
            getCartLenght,
            addProduct,
            removeProduct,
            getAmount,
            handleBuyItens
        }}>
            {children}
        </ShopContext.Provider>
    )
}