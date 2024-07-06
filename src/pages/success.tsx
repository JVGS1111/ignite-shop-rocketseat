import Link from "next/link";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
    customerName: string,
    products: {
        name: string,
        imageUrl: string
    }[]
}

export default function Success({ customerName, products }: SuccessProps) {

    function renderProdImgs() {
        if (!products) {
            return null
        }

        return products.map(item => (
            <ImageContainer>
                <Image src={item.imageUrl} alt="" width={120} height={110} />
            </ImageContainer>
        ))
    }

    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                <ImagesContainer>
                    {renderProdImgs()}
                </ImagesContainer>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length}</strong>camisetas já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    if (!query.session_id) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"]
    });

    const customerName = session.customer_details!.name;
    const products = session.line_items!.data.map((item) => {
        const _prod = item.price!.product as Stripe.Product;
        return {
            name: _prod.name,
            imageUrl: _prod.images[0]
        }
    });

    return {
        props: {
            customerName,
            products
        }
    }
}