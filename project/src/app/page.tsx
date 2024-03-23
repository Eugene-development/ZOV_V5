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
  title: "Фабрика мебели ЗОВ | Корпусная мебель на заказ по индивидуальным размерам",
  description:
    "Кухонные гарнитуры и шкафы купе от белорусской фабрики ЗОВ. Изготовление корпусной мебели на заказ из материалов высокого качества.",
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
      {/* <Call /> */}
    </>
  );
}
