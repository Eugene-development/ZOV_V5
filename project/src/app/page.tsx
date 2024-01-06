import {
  Hero,
  Brand,
  ExampleFurniture,
  Colors,
  Logo,
  Feature,
  Equipment,
  Testimonials,
  Call,
  ZOV,
} from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Кухни на заказ в Москве из Беларуси",
  description:
    "Кухонные гарнитуры и шкафы из материалов высокого качества от белорусской фабрики ЗОВ",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <ExampleFurniture />
      <ZOV />

      <Colors />
      <Logo />
      <Feature />
      <Equipment />
      <Testimonials />
      <Call />
    </>
  );
}
