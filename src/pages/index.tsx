import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

type Product = {
  id: string,
  name: string,
  imageURL: string,
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  function renderProducts(productList: Product[]) {

    return productList.map(prod => (
      <Link href={`/product/${prod.id}`} key={prod.id} prefetch>
        <Product
          className="keen-slider__slide"
        >
          <Image
            src={prod.imageURL}
            width={520}
            height={480}
            alt=""
          />
          <footer>
            <strong>{prod.name}</strong>
            <span>{prod.price}</span>
          </footer>
        </Product >
      </Link>
    ))
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        renderProducts(products)
      }
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map(prod => {
    const price = prod.default_price as Stripe.Price;

    return {
      id: prod.id,
      name: prod.name,
      imageURL: prod.images.length > 0 ? prod.images[0] : "",
      price: new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}
