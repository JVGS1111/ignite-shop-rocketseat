import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import Camsieta1 from "../assets/camisetas/1.png";
import Camsieta2 from "../assets/camisetas/2.png";
import Camsieta3 from "../assets/camisetas/3.png";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
//import { getServerSideProps } from "next/dist/build/templates/pages";

export default function Home(props: any) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props)}</pre>
      <Product className="keen-slider__slide">
        <Image src={Camsieta1} width={520} height={480} alt=""></Image>
        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product >
      <Product className="keen-slider__slide">
        <Image src={Camsieta1} width={520} height={480} alt=""></Image>
        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camsieta1} width={520} height={480} alt=""></Image>
        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camsieta1} width={520} height={480} alt=""></Image>
        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}


export const getServerSideProps = () => {
  return {
    props: {
      list: [1, 2, 3, 4]
    }
  }
}
