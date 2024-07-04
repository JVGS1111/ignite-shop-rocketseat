import { styled } from "../styles";

const Button = styled("button", {
  background: "$gray100",
  borderRadius: 8,
  border: 0,
  span: {
    fontWeight: "bold"
  }
})

export default function Home() {
  return (
    <Button><span>test</span>Enviar</Button>
  );
}
