import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";

type Product = {
    id: string,
    name: string,
    imageURL: string,
    price: string,
    description: string,
    defaultPriceId: string
}

interface ProductProps {
    product: Product
}

export default function Products({ product }: ProductProps) {
    const [isCreationCheckoutSession, setIsCreationCheckoutSession] = useState(false);

    async function handleBuyProduct() {
        try {
            setIsCreationCheckoutSession(true);
            const { data } = await axios.post("/api/checkout", {
                priceId: product.defaultPriceId
            });
            const { checkoutUrl } = data;
            window.location.href = checkoutUrl;
        } catch (error) {
            setIsCreationCheckoutSession(false);
            alert("Falha ao redirecionar ao checkout!");
        }
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageURL} width={520} height={480} alt={product.name} />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button disabled={isCreationCheckoutSession} onClick={handleBuyProduct}>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer >
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
        price: new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
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