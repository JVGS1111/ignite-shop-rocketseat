import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router"
import Stripe from "stripe";

type Product = {
    id: string,
    name: string,
    imageURL: string,
    price: string,
    description: string,
}

interface ProductProps {
    product: Product
}

export default function Products({ product }: ProductProps) {

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageURL} width={520} height={480} alt={product.name} />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
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
        description: product.description
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
        fallback: true,
    }

}