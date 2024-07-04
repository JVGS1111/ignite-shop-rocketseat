import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import Camsieta1 from "../assets/camisetas/1.png";
import Camsieta2 from "../assets/camisetas/2.png";
import Camsieta3 from "../assets/camisetas/3.png";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { log } from "console";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

type Product = {
  id: string,
  name: string,
  imageURL: string,
  price: number
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
      <Product className="keen-slider__slide" key={prod.id}>
        <Image src={prod.imageURL} width={520} height={480} alt=""></Image>
        <footer>
          <strong>{prod.name}</strong>
          <span>R$ {prod.price}</span>
        </footer>
      </Product >
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


export const getServerSideProps: GetServerSideProps = async () => {

  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map(prod => {
    const price = prod.default_price as Stripe.Price;

    return {
      id: prod.id,
      name: prod.name,
      imageURL: prod.images.length > 0 ? prod.images[0] : "",
      price: price.unit_amount! / 100
    }
  })
  console.log(products);

  return {
    props: {
      products
    }
  }
}
