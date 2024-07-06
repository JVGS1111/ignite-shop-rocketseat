import { Product } from "@/src/context/shopContext";
import { useShop } from "@/src/hooks/useShop";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";

export interface ProductProps {
    product: Product
}

export default function Products({ product }: ProductProps) {
    const [isCreationCheckoutSession, setIsCreationCheckoutSession] = useState(false);
    const { addProduct } = useShop();

    // async function handleBuyProduct() {
    //     try {
    //         setIsCreationCheckoutSession(true);
    //         const { data } = await axios.post("/api/checkout", {
    //             priceId: product.defaultPriceId
    //         });
    //         const { checkoutUrl } = data;
    //         window.location.href = checkoutUrl;
    //     } catch (error) {
    //         setIsCreationCheckoutSession(false);
    //         alert("Falha ao redirecionar ao checkout!");
    //     }
    // }

    function handleAddProductToCart() {
        addProduct(product);
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageURL} width={520} height={480} alt={product.name} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.priceFormatted}</span>
                    <p>{product.description}</p>
                    <button disabled={isCreationCheckoutSession} onClick={handleAddProductToCart}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer >
        </>

    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const { id } = params!;

    const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    const prodObj = {
        id: product.id,
        name: product.name,
        imageURL: product.images.length > 0 ? product.images[0] : "",
        priceFormatted: new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
        price: price.unit_amount! / 100
    };

    return {
        props: {
            product: prodObj
        },
        revalidate: 60 * 60 * 1
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: "blocking",
    }

}